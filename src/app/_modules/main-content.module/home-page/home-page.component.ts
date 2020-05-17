import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/_services/users.service';

@Component({
    selector: 'home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {
    userId:number;
    artists = [];
    constructor(private usersService: UsersService) {

    }
    ngOnInit() {
        this.userId = parseInt(localStorage.getItem("user_id"));
        this.usersService.getFavoriteArtists(this.userId).subscribe(res=>{
            this.artists = res;
        })
    }

}
