import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import IMovie from 'src/app/core/movies/models/IMovie.model';
import { MoviesService } from 'src/app/core/movies/services/movies.service';
import { IResponseTrendMovie } from 'src/app/core/search/models/response-trend.model';
import { SearchService } from 'src/app/core/search/services/search.service';
import { BackgroundService } from 'src/app/shared/services/background.service';

import { map } from 'rxjs/operators';
import INews from 'src/app/shared/models/INews.model';
import { NewsService } from 'src/app/shared/services/news.service';

@Component({
  selector: 'app-page-index',
  templateUrl: './page-index.component.html',
  styleUrls: ['./page-index.component.less']
})
export class PageIndexComponent implements OnInit {

  trends: IResponseTrendMovie[] = [];

  news$: Observable<INews[]>;
  movies$: Observable<IMovie[]>;
  moviesTrends$: Observable<IMovie[]>;

  constructor(private $news: NewsService, private $movies: MoviesService ,private $search: SearchService, private $bg: BackgroundService) { 
    this.news$ = this.$news.news$;
    this.movies$ = this.$movies.movies$;
    this.moviesTrends$ = this.movies$.pipe(
      map(movies => movies.filter(movie => movie.isTrend))
    )
  }

  async ngOnInit() {
    this.$movies.fetchTrending();
    this.$news.fetchNews();
  }


}



/*
    const movie = this.getRandomMovie();
    const src = this.getImageOriginal(movie.poster_path)
    this.$bg.setImage(src);*/