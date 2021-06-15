import { Component, Input, OnInit } from '@angular/core';
import IMovie from '../../models/IMovie.model';

@Component({
  selector: 'app-movie-card-large',
  templateUrl: './movie-card-large.component.html',
  styleUrls: ['./movie-card-large.component.less']
})
export class MovieCardLargeComponent implements OnInit {

  @Input()
  movie!:IMovie;

  constructor() { }

  ngOnInit(): void {
  }

  getMovieSrc(){
    if(this.movie.poster_path){
      return 'http://image.tmdb.org/t/p/w780/' + this.movie.poster_path
    } else {
      return '../../../../../assets/images/movie_placeholder.png'
    }
  }

}
