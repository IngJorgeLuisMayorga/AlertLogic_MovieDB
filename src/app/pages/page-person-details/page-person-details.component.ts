import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import IMovie from 'src/app/core/movies/models/IMovie.model';
import { MoviesService } from 'src/app/core/movies/services/movies.service';
import {IPersonDetail} from 'src/app/core/people/models/IPerson.model';
import { PeopleService } from 'src/app/core/people/services/people.service';
import { BackgroundService } from 'src/app/shared/services/background.service';

@Component({
  selector: 'app-page-person-details',
  templateUrl: './page-person-details.component.html',
  styleUrls: ['./page-person-details.component.less']
})
export class PagePersonDetailsComponent implements OnInit {

  private id = -1;
  public person: IPersonDetail | null = null;


  public recommendations: IMovie[] | null = null;
  public credits: any | null = null;


  constructor( 
    private $bg: BackgroundService, 
    private route: ActivatedRoute, 
    private $movie: MoviesService,
    private $people: PeopleService,
  ) { }

  async ngOnInit() {
    this.route.params.subscribe(async params => {

      this.id = params.id;
      const person = await this.$people.fetchById(this.id);
      this.person = person;
  
      const credits = await this.$people.fetchCreditsById(this.id);(this.id);
      this.credits = credits;

      if(this.person) this.$bg.setImage(
          this.$bg.getImageOriginal(this.person.profile_path)
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



  getSrc(file: string, isMovie: boolean = false){
    if(file){
      return 'http://image.tmdb.org/t/p/w780/' + file
    } else {
      if(isMovie) return '../../../../../assets/images/movie_placeholder.png'
      return '../../../../../assets/images/person_placeholder.jpg'
    }
  }

}

