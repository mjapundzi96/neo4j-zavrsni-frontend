import { Component, OnInit } from '@angular/core';
import { owlOptions } from 'src/app/const/owl-options.const'
import { AppService } from 'src/app/_services/app.service';

@Component({
    selector: 'home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {
    customOptions = owlOptions;
    mostPopularSongs;
    bestOfPreferredGenre;
    bestOfPreferredArtist;
    bestOfPreferredDecade;
    period: 'week' | 'month' | 'alltime' = 'week'
    constructor(
        private appService: AppService,
    ) {

    }

    ngOnInit() {
        this.getMostPopular()

        this.appService.getBestOfPreferredGenre().subscribe(res => {
            this.bestOfPreferredGenre = res;
        })

        this.appService.getBestOfPreferredArtist().subscribe(res => {
            this.bestOfPreferredArtist = res;
        })

        this.appService.getBestOfPreferredDecade().subscribe(res => {
            this.bestOfPreferredDecade = res;
        })

    }

    getMostPopular() {
        this.appService.getMostPopularSongs(this.period).subscribe(res => {
            this.mostPopularSongs = res;
        })
    }

    onChangePeriod(e) {
        this.period = e.target.value
        this.getMostPopular()
    }
}
