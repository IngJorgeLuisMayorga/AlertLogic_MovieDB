import { Component, Input, OnInit } from '@angular/core';
import IMovie from 'src/app/core/movies/models/IMovie.model';

@Component({
  selector: 'app-index-trending-section',
  templateUrl: './index-trending-section.component.html',
  styleUrls: ['./index-trending-section.component.less']
})
export class IndexTrendingSectionComponent implements OnInit {

  @Input()
  movies: IMovie[] | null = [];

  constructor() { }

  ngOnInit(): void {
  }


  getImage(src: string): string{
    return 'http://image.tmdb.org/t/p/w780/' + src;
  }

  getImageOriginal(src: string): string{
    return 'http://image.tmdb.org/t/p/original/' + src;
  }


  
}
