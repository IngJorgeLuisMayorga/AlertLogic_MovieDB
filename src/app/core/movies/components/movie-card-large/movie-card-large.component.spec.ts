import { ComponentFixture, TestBed } from '@angular/core/testing';
import IMovie from '../../models/IMovie.model';

import { MovieCardLargeComponent } from './movie-card-large.component';

const movieBatman: IMovie = {
  adult: false,
  backdrop_path: "/nvjcKJCDPU9bDEEyTyneTj4PnuO.jpg",
  genre_ids: [
    14,
    28
  ],
  id: 268,
  original_language: "en",
  original_title: "Batman",
  overview: "Batman must face his most ruthless nemesis when a deformed madman calling himself \"The Joker\" seizes control of Gotham's criminal underworld.",
  popularity: 28.87,
  poster_path: "/tDexQyu6FWltcd0VhEDK7uib42f.jpg",
  release_date: "1989-06-23",
  title: "Batman",
  video: false,
  vote_average: 7.2,
  vote_count: 5523,
  media_type: '',
  isTrend: false,
}

describe('MovieCardLargeComponent', () => {
  let component: MovieCardLargeComponent;
  let fixture: ComponentFixture<MovieCardLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCardLargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // It should show placeholder if not movie object
  it('It should show placeholder if not movie object', () => {

    const movieBatmanNoImages = movieBatman;
    movieBatmanNoImages.poster_path = '';
    movieBatmanNoImages.backdrop_path = '';

    component.movie = movieBatmanNoImages;
    fixture.detectChanges();

    const src = fixture.nativeElement.querySelector('.upper-picture img').src;
    expect(src).toContain('movie_placeholder.png')

  });

  // It should redener proper profile pic
  it(' It should redener proper profile pic', () => {
  
    component.movie = movieBatman;
    fixture.detectChanges();

    const src = fixture.nativeElement.querySelector('.upper-picture img').src;
    expect(src).toContain('http://image.tmdb.org/t/p/w780//tDexQyu6FWltcd0VhEDK7uib42f.jpg')
  
  });

  // It should show proper date format
  it('It should show proper date format', () => {

    component.movie = movieBatman;
    fixture.detectChanges();

    const year = fixture.nativeElement.querySelector('.movie-release-year').innerText;
    expect(year).toBe('1989')
  
  });




});
