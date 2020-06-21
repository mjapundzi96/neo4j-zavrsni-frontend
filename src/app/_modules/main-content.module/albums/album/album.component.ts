import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from 'src/app/_services/albums.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  id:number;
  album:any;
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    margin: 20,
    responsiveRefreshRate: 0,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true,
  }
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
