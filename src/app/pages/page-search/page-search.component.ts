import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import IMovie from 'src/app/core/movies/models/IMovie.model';
import { MoviesService } from 'src/app/core/movies/services/movies.service';
import { SearchService } from 'src/app/core/search/services/search.service';

@Component({
  selector: 'app-page-search',
  templateUrl: './page-search.component.html',
  styleUrls: ['./page-search.component.less']
})
export class PageSearchComponent implements OnInit {

  keyword = '';

  movies$: Observable<any[]>;
  people$: Observable<any[]>;

  results$: Observable<{ movies: any[], people: any[]}>;

  searching$: Observable<boolean>;

  constructor(private $movies: MoviesService, private $search: SearchService) { 
    this.results$ = this.$search.results$;
    this.searching$ = this.$search.searching$;
    this.movies$ = this.$search.results_movies$;
    this.people$ = this.$search.results_people$;
  }

  ngOnInit(): void {
    this.$search.clearSearch();
  }

  setKeyword($event: any){
    
    const keyword: string = $event.target.value;
    this.$search.clearSearch();

    if(!(!keyword || keyword.length === 0)){
      this.$search.getSearchMovieByKeyword(keyword);
      this.$search.getSearchPersonByKeyword(keyword);
    }

  }

}
