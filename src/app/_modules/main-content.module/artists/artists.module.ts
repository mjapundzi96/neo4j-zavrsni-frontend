import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistComponent } from './artist/artist.component';
import { ArtistsComponent } from './artists.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { ArtistsRoutingModule } from './artists-routing.module'

@NgModule({
  declarations: [ArtistComponent, ArtistsComponent],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule,
    ArtistsRoutingModule
  ]
})
export class ArtistsModule { }
