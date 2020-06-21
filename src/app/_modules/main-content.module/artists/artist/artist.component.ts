import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistsService } from 'src/app/_services/artists.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  id: number;
  artist: any;
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
    private route: ActivatedRoute,
    private artistsService: ArtistsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id
      this.artistsService.getArtist(this.id).subscribe(res => {
        this.artist = res;
      })
    })
  }

}
