import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../_services/login.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
    public username:string;
    constructor(
        private loginService:LoginService,
        private router: Router
    ) { }

    ngOnInit() {
       this.username = localStorage.getItem('username')
    }

    logout(){
        this.loginService.logout()
    }
}
