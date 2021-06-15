import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import IMovie from 'src/app/core/movies/models/IMovie.model';
import { MoviesService } from 'src/app/core/movies/services/movies.service';
import { SearchService } from 'src/app/core/search/services/search.service';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.less']
})
export class SearchFieldComponent implements OnInit {

  keyword = '';

  results: any[] = [
  {
    name:'Batman',
    date: '12 de enero 1966',
    description: 'Batman es una serie televisiva exhibida entre 1966 y 1968 en el canal estadounidense ABC, con un total de 120 episodios.',
    image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1ZEJuuDh0Zpi5ELM3Zev0GBhQ3R.jpg'
  }
  ];

  movies$: Observable<any[]>;

  constructor(private router: Router, private $movies: MoviesService, private $search: SearchService, private route: ActivatedRoute) { 
    this.movies$ = this.$search.results_movies$.pipe(
      map(movies => movies.map((movie: IMovie) => {
        return {
          id: movie.id,
          name: movie.title,
          date: movie.release_date,
          description: movie.overview,
          image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/' + movie.poster_path
        }
      }))
    )
  }

  ngOnInit(): void {


  }

  goToMovie(id: number){
    
    this.keyword = '';
    this.$search.clearSearch();

    this.router.navigate(['/movie/'+id]);


  }

  setKeyword($event: any){

    const keyword = $event.target.value;
    this.keyword = keyword;

    this.$search.clearSearch();

    if(!(!keyword || keyword.length === 0)){
      this.$search.getSearchMovieByKeyword(keyword);
      this.$search.getSearchPersonByKeyword(keyword);
    }
  }


}
