import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexUpcomingSectionComponent } from './index-upcoming-section.component';

describe('IndexUpcomingSectionComponent', () => {
  let component: IndexUpcomingSectionComponent;
  let fixture: ComponentFixture<IndexUpcomingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexUpcomingSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexUpcomingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
