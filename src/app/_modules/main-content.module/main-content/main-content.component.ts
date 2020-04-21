import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'main-content',
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.scss']
})

export class MainContentComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
}
