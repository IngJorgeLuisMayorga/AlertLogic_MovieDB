import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageMovieDetailsComponent } from './page-movie-details.component';
import { PageMovieDetailsRoutingModule } from './page-movie-details.routing.module';



@NgModule({
  declarations: [
    PageMovieDetailsComponent
  ],
  imports: [
    CommonModule,
    PageMovieDetailsRoutingModule
  ]
})
export class PageMovieDetailsModule { }
