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
    console.log(' ')
  }

  get movieURL():string{
    if(this.movie && this.movie.id){
      return '/movie/' +this.movie.id
    } else {
      return '';
    }
  }

  getMovieSrc(){
    if(this.movie && this.movie.poster_path){
      return 'http://image.tmdb.org/t/p/w780/' + this.movie.poster_path
    } else {
      return '../../../../../assets/images/movie_placeholder.png'
    }
  }

  getCircleColor(level: number){
    if(level < 2.5) return 'red';
    if(level < 5) return 'orange';
    if(level < 7.5) return 'yellow';
    if(level < 10) return 'green';
    return 'green';
  }
}
