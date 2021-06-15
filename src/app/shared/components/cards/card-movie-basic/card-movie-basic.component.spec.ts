import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMovieBasicComponent } from './card-movie-basic.component';

describe('CardMovieBasicComponent', () => {
  let component: CardMovieBasicComponent;
  let fixture: ComponentFixture<CardMovieBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMovieBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMovieBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
