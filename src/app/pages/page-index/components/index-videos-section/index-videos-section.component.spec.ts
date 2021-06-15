import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexVideosSectionComponent } from './index-videos-section.component';

describe('IndexVideosSectionComponent', () => {
  let component: IndexVideosSectionComponent;
  let fixture: ComponentFixture<IndexVideosSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexVideosSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexVideosSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
