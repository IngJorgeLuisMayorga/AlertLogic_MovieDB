import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundGlassComponent } from './background-glass.component';

describe('BackgroundGlassComponent', () => {
  let component: BackgroundGlassComponent;
  let fixture: ComponentFixture<BackgroundGlassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundGlassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
