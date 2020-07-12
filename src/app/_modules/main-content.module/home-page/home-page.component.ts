import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/_services/users.service';
import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';


@Component({
    selector: 'home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {
    userId: number;
    artists;
    albums;
    customOptions: OwlOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        navSpeed: 700,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        margin: 20,
        responsiveRefreshRate: 0,
        slideBy:'page',
        smartSpeed:1200,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 2,
            },
            740: {
                items: 3,
            },
            940: {
                items: 4,
            }
        },
        nav: true,
    }
    activeSlides: SlidesOutputData;
    slidesStore: any[];
    constructor(
        private usersService: UsersService,
        private router: Router
    ) {

    }
    ngOnInit() {
        this.userId = parseInt(localStorage.getItem("user_id"));
        this.usersService.getRecommendedArtists(this.userId, 0, 10).subscribe(res => {
            this.artists = res;
        })
        this.usersService.getRecommendedAlbums(this.userId, 0, 10).subscribe(res => {
            this.albums = res;
        })
    }

    getPassedData(data: SlidesOutputData) {
        this.activeSlides = data;
    }
}
