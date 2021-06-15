import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexNewsSectionComponent } from './index-news-section.component';

describe('IndexNewsSectionComponent', () => {
  let component: IndexNewsSectionComponent;
  let fixture: ComponentFixture<IndexNewsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexNewsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexNewsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
