import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongComponent } from './song/song.component';
import { SongsComponent } from './songs.component';

@NgModule({
  declarations: [SongComponent, SongsComponent],
  imports: [
    CommonModule,
  ]
})
export class SongsModule { }
