import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { owlOptions } from 'src/app/const/owl-options.const'
import { SongsService } from 'src/app/_services/songs.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
   
  }

}
