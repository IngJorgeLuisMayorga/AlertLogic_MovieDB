import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardLargeComponent } from './components/movie-card-large/movie-card-large.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MovieCardLargeComponent
  ],
  exports:[
    MovieCardLargeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MoviesModule { }
