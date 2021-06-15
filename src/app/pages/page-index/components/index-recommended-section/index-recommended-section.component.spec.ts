import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexRecommendedSectionComponent } from './index-recommended-section.component';

describe('IndexRecommendedSectionComponent', () => {
  let component: IndexRecommendedSectionComponent;
  let fixture: ComponentFixture<IndexRecommendedSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexRecommendedSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexRecommendedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
