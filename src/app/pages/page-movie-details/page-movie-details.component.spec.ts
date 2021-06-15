import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMovieDetailsComponent } from './page-movie-details.component';

describe('PageMovieDetailsComponent', () => {
  let component: PageMovieDetailsComponent;
  let fixture: ComponentFixture<PageMovieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMovieDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
