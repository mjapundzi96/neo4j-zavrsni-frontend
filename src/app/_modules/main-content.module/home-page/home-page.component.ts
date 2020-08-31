import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/_services/users.service';
import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { owlOptions } from 'src/app/const/owl-options.const'
import { AppService } from 'src/app/_services/app.service';
import { GenresService } from 'src/app/_services/genres.service';


@Component({
    selector: 'home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {
    userId: number;
    artists;
    albums;

    customOptions = owlOptions;
    activeSlides: SlidesOutputData;
    slidesStore: any[];
    favoriteGenres = []
    popularAlbumsByGenre = []
    bestOfPreferredGenre;
    bestOfPreferredArtist;
    bestOfPreferredDecade;
    constructor(
        private usersService: UsersService,
        private router: Router,
        private appService:AppService,
        private genresService:GenresService
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

        this.appService.getBestOfPreferredGenre().subscribe(res=>{
            this.bestOfPreferredGenre = res;
        })

        this.appService.getBestOfPreferredArtist().subscribe(res=>{
            this.bestOfPreferredArtist = res;
        })

        this.appService.getBestOfPreferredDecade().subscribe(res=>{
            this.bestOfPreferredDecade = res;
        })
    }
}
