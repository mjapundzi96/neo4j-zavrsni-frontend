import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistComponent } from './artist/artist.component';
import { ArtistsComponent } from './artists.component';

@NgModule({
  declarations: [ArtistComponent, ArtistsComponent],
  imports: [
    CommonModule,
  ]
})
export class ArtistsModule { }
