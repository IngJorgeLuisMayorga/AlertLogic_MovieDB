import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardLargeComponent } from './movie-card-large.component';

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
});
