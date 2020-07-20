import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongsService } from 'src/app/_services/songs.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {
  id:number;
  song:any;
  user_id:number = parseInt(localStorage.getItem("user_id"))
  constructor(
    private route:ActivatedRoute,
    private songsService:SongsService,
    private sanitizer:DomSanitizer
  ) { }

  ngOnInit() {
   
    this.route.params.subscribe(params=>{
      this.id = params.id
      this.songsService.getSong(this.id).subscribe(res=>{
        this.song = res;
        console.log(this.song)
      })
      this.songsService.viewSong(this.id,{user_id:this.user_id}).subscribe(res=>{

      })
    })
  }

  getVideoUrl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.song.songUrl)
  }

}