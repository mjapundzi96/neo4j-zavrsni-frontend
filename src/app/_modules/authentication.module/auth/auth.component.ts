import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
    loader = false;

    constructor(private router: Router) { }

    async ngOnInit() {
        
    }

    goHome() {
        this.router.navigate(['']);
    }

}
