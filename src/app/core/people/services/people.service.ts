import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {


  constructor(private $http: HttpClient) {}

  async fetchById(id: number) {

    const url = `${environment.mdbapi}person/${id}`
    const movie_new_unformated = (await this.$http.get<any>(url).toPromise());
    const movie = movie_new_unformated;
    return movie;
   
  }
  async fetchCreditsById(id: number) {

    const url = `${environment.mdbapi}person/${id}/movie_credits`
    const movie_new_unformated = (await this.$http.get<any>(url).toPromise());
    const movie = movie_new_unformated;
    return movie;
   
  }

}
