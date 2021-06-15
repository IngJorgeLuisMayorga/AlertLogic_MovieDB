import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePersonDetailsComponent } from './page-person-details.component';

describe('PagePersonDetailsComponent', () => {
  let component: PagePersonDetailsComponent;
  let fixture: ComponentFixture<PagePersonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePersonDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePersonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
