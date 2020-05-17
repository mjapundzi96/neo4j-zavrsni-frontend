import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../_services/login.service'
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/_services/users.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
    public username: string;
    constructor(
        private loginService: LoginService,
        private usersService: UsersService,
        private router: Router
    ) { }

    ngOnInit() {
        const userId = parseInt(localStorage.getItem("user_id"));
        this.usersService.getUser(userId).subscribe(res=>{
            this.username = res.username;
        })
    }

    logout() {
        this.loginService.logout()
    }
}
