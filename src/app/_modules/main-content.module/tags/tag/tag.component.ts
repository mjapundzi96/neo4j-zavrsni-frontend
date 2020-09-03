import { Component, OnInit } from '@angular/core';
import { owlOptions } from 'src/app/const/owl-options.const';
import { ActivatedRoute } from '@angular/router';
import { SongsService } from 'src/app/_services/songs.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  customOptions = owlOptions
  songs;
  tag;
  constructor(
    private route: ActivatedRoute,
    private songsService: SongsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.name) {
        this.tag = params.name
        this.songsService.getSongs(this.tag).subscribe(res => {
          this.songs = res
        })
      }
    })
  }
}
