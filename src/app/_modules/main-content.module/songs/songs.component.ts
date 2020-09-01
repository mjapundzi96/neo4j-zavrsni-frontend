import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { owlOptions } from 'src/app/const/owl-options.const'
import { SongsService } from 'src/app/_services/songs.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {
  customOptions = owlOptions
  songs;
  tag;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private songsService:SongsService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      if (params.tag){
        this.tag = params.tag
        this.songsService.getSongs(this.tag).subscribe(res=>{
          this.songs = res
        })
      }
      else this.router.navigateByUrl("/")
    })
  }

}
