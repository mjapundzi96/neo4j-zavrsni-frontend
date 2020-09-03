import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './tag/tag.component';
import { TagsComponent } from './tags.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { TagsRoutingModule } from './tags-routing.module';


@NgModule({
  declarations: [TagsComponent, TagComponent],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule,
    TagsRoutingModule
  ],
  exports: [
  ]
})
export class TagsModule { }
