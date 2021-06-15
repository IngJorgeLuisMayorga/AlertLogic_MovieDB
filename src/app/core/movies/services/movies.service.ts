import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { environment } from 'src/environments/environment'
import toMovie from '../helpers/toMovie'
import IMovie from '../models/IMovie.model'
import { IMovieResponseTrend } from '../models/IMovieTrend.response.model'

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private max_movies = 120

  private _movies = new BehaviorSubject<IMovie[]>([])
  public movies$ = this._movies.asObservable()

  constructor(private $http: HttpClient) {}

  async fetchTrending() {
    const url = `${environment.mdbapi}trending/movie/day`
    const movies_new_unformated = (
      await this.$http.get<IMovieResponseTrend>(url).toPromise()
    ).results
    const movies_new = movies_new_unformated.map((movie) => toMovie(movie))
    const movies_old = this._movies.getValue()

    const movies = [...new Set([...movies_old, ...movies_new])].map((movie) => {
      return {
        ...movie,
        isTrend: true,
      }
    })
    const isMoviesBig = movies.length > this.max_movies

    if (isMoviesBig) {
      movies.splice(movies.length - this.max_movies, movies.length)
    }
    
    this._movies.next(movies)
  }
  async fetchById(id: number) {

    const url = `${environment.mdbapi}movie/${id}`
    const movie_new_unformated = (await this.$http.get<any>(url).toPromise());
    const movie = movie_new_unformated;
    return movie;
   
  }
  async fetchCreditsById(id: number) {

    const url = `${environment.mdbapi}movie/${id}/credits`
    const movie_new_unformated = (await this.$http.get<any>(url).toPromise());
    const movie = movie_new_unformated;
    return movie;
   
  }
  async fetchRecommendationsById(id: number) {

    const url = `${environment.mdbapi}movie/${id}/recommendations`
    const movies_new_unformated = (await this.$http.get<any>(url).toPromise());
    const movies = movies_new_unformated.results;
    return movies;
   
  }
  

}
