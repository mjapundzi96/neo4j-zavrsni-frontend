import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongComponent } from './song/song.component';
import { SongsComponent } from './songs.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { SongsRoutingModule } from './songs-routing.module';


@NgModule({
  declarations: [SongComponent, SongsComponent],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule,
    SongsRoutingModule
  ],
  exports:[
  ]
})
export class SongsModule { }
