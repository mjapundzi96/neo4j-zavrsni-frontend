import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album/album.component';
import { AlbumsComponent } from './albums.component';

@NgModule({
  declarations: [AlbumComponent, AlbumsComponent],
  imports: [
    CommonModule,
  ]
})
export class AlbumsModule { }
