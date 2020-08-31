import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongsService } from 'src/app/_services/songs.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { owlOptions } from 'src/app/const/owl-options.const'


@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {
  id: number;
  song: any;
  user_id: number = parseInt(localStorage.getItem("user_id"))
  usersAlsoViewed
  relatedSongs
  customOptions = owlOptions
  songUrl: SafeResourceUrl = ''
  hasLiked = false;
  likes: number;
  constructor(
    private route: ActivatedRoute,
    private songsService: SongsService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = params.id
      this.songsService.getSong(this.id).subscribe(res => {
        this.song = res;
        this.songUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.song.songUrl)
        this.likes = this.song.likes;
      })
      this.songsService.viewSong(this.id).subscribe(res => {

      })

      this.songsService.getUsersAlsoViewed(this.id).subscribe(res => {
        this.usersAlsoViewed = res;
      })

      this.songsService.getRelatedSongs(this.id).subscribe(res => {
        this.relatedSongs = res;
      })

      this.songsService.getHasLiked(this.id).subscribe(res => {
        this.hasLiked = res
      })
    })
  }

  likeSong() {
    this.songsService.likeSong(this.id).subscribe(() => {
      this.hasLiked = true
      this.likes = this.likes + 1
    })
  }

  unLikeSong() {
    this.songsService.unLikeSong(this.id).subscribe(() => {
      this.hasLiked = false
      this.likes = this.likes - 1
    })
  }


}
