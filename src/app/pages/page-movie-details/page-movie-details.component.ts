import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import IMovie from 'src/app/core/movies/models/IMovie.model';
import { MoviesService } from 'src/app/core/movies/services/movies.service';
import { BackgroundService } from 'src/app/shared/services/background.service';

@Component({
  selector: 'app-page-movie-details',
  templateUrl: './page-movie-details.component.html',
  styleUrls: ['./page-movie-details.component.less']
})
export class PageMovieDetailsComponent implements OnInit {

  private id = -1;
  public movie: IMovie | null = null;
  public recommendations: IMovie[] | null = null;
  public credits: any | null = null;


  constructor( private $bg: BackgroundService, private route: ActivatedRoute, private $movie: MoviesService) { }

  async ngOnInit() {

    this.route.params.subscribe(async params => {

      this.id = params.id;
      const movie = await this.$movie.fetchById(this.id);
      this.movie = movie;
  
      const credits = await this.$movie.fetchCreditsById(this.id);(this.id);
      this.credits = credits;
  
      const recommendations = await this.$movie.fetchRecommendationsById(this.id);
      this.recommendations = recommendations;

      if(this.movie) this.$bg.setImage(
          this.$bg.getImageOriginal(this.movie.backdrop_path)
      )

    })

   

  }


  public get director(): string{
    if(this.credits){
      return this.credits.crew.find((cast: any) => cast.job==="Director").name
    } else {
      return '';
    }
  }

  public get cast(): any[]{
    if(this.credits){
      return this.credits.cast
    } else {
      return [];
    }
  }



  getSrc(file: string){
    if(file){
      return 'http://image.tmdb.org/t/p/w780/' + file
    } else {
      return '../../../../../assets/images/person_placeholder.jpg'
    }
  }

}
