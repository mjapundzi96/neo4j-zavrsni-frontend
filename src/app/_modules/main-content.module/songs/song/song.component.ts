import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongsService } from 'src/app/_services/songs.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {
  id:number;
  song:any;
  constructor(
    private route:ActivatedRoute,
    private songsService:SongsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id = params.id
      this.songsService.getSong(this.id).subscribe(res=>{
        this.song = res;
        console.log(this.song)
      })
    })
  }

}
