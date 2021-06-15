import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import INews from '../models/INews.model';

// https://movieweb.com/rss/movie-news/
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  news = new BehaviorSubject<INews[]>([]);
  news$ = this.news.asObservable();

  constructor(private $http: HttpClient) { }

  async fetchNews(){
    const url = 'https://cors-anywhere.herokuapp.com/https://movieweb.com/rss/movie-news/';
    //const news_unformated = (await this.$http.get<any>(url).toPromise())
    var requestOptions: RequestInit = {
      method: 'GET',
      redirect: 'follow'
    };
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
    
    fetch(CORS_PROXY + "http://fetchrss.com/rss/5f56c6803c140278522985135f56c72f61579219a908f6e2.json", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    
    const news: any = [];


    this.setNews(news)
  }

  setNews(news: INews[]){
    this.news.next(news);
  }

  getNews(){
    return this.news.getValue()
  }
}
