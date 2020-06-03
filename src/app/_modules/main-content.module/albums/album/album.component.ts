import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from 'src/app/_services/albums.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  id:number;
  album:any;
  constructor(
    private route:ActivatedRoute,
    private albumsService:AlbumsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id = params.id
      this.albumsService.getAlbum(this.id).subscribe(res=>{
        this.album = res;
        console.log(this.album)
      })
    })
  }

}
