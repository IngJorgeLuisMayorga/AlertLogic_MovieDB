import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import IResponseSearch from '../models/response-search.model';
import { IResponseTrend } from '../models/response-trend.model';
import { BehaviorSubject, forkJoin, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {


  private results_movies = new BehaviorSubject<any[]>([]);
  public results_movies$ = this.results_movies.asObservable();

  private results_people = new BehaviorSubject<any[]>([]);
  public results_people$ = this.results_people.asObservable();

  public results$  = forkJoin(
    {
      movies: this.results_movies$ ,
      people: this.results_people$,
    }
  )

  private searching = new BehaviorSubject<boolean>(false);
  public searching$ = this.searching.asObservable();

  constructor(private $http: HttpClient) { }


  setSearching(value: boolean){
    this.searching.next(value);
  }

  clearSearch(): void{

    // Enable Searching spinner 
    this.setSearching(false);

    this.results_movies.next([]);
    this.results_people.next([]);

  }



  async getSearchByQuery(category: "movie" | "person", query: string){

    // Enable Searching spinner 
    this.setSearching(true);

    // Await API Get
    const url = `${environment.mdbapi}search/${category}?${query}`
    const results = (await this.$http.get<IResponseSearch>(url).toPromise()).results
    
    if(category === "movie") this.results_movies.next(results);
    if(category === "person") this.results_people.next(results);

    // Disable Searching spinner 
    this.setSearching(false);

  }

  async getSearchMovieByKeyword(keyword: string){
    const page = 1;
    const query = `&query=${keyword}&page=${page}`;
    this.getSearchByQuery('movie',query);
  }

  async getSearchPersonByKeyword(keyword: string){
    const page = 1;
    const query = `&query=${keyword}&page=${page}`;
    this.getSearchByQuery('person',query);
  }


  async getTrending(){
    const url = `${environment.mdbapi}trending/movie/week`
    return this.$http.get<IResponseTrend>(url).toPromise()
  }
}
