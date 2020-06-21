import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album/album.component';
import { AlbumsComponent } from './albums.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [AlbumComponent, AlbumsComponent],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule
  ]
})
export class AlbumsModule { }
