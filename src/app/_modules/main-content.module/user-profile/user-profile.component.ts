import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/_services/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userId = parseInt(localStorage.getItem("user_id"))
  listenHistory;
  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.usersService.getListenHistory(this.userId).subscribe(res=>{
      console.log(res)
    })
  }

}
