import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTrendingSectionComponent } from './index-trending-section.component';

describe('IndexTrendingSectionComponent', () => {
  let component: IndexTrendingSectionComponent;
  let fixture: ComponentFixture<IndexTrendingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexTrendingSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexTrendingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
