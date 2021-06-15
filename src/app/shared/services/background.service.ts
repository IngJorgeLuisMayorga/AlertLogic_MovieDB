import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import IMovie from 'src/app/core/movies/models/IMovie.model';
import { MoviesService } from 'src/app/core/movies/services/movies.service';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  image = new BehaviorSubject('');
  image$ = this.image.asObservable();

  constructor(private $movies: MoviesService) { 
    this.$movies.movies$.subscribe(movies => {
      if(movies){
        const movie = this.getRandomMovie(movies);
        if(movie){
          const src = this.getImageOriginal(movie.poster_path)
          this.setImage(src);
        }
      }
    })
  }

  setImage(src: string){
    this.image.next(src)
  }

  getImage(){
    return this.image.getValue()
  }

  getRandomMovie(movies: IMovie[]){
    return movies ? movies[Math.floor(Math.random()*movies.length)] : null;
  }

  getImageOriginal(src: string): string{
    return 'http://image.tmdb.org/t/p/original/' + src;
  }
  
}
