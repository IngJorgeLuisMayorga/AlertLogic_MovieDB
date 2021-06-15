import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCardLargeComponent } from './person-card-large.component';

describe('PersonCardLargeComponent', () => {
  let component: PersonCardLargeComponent;
  let fixture: ComponentFixture<PersonCardLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonCardLargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonCardLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
