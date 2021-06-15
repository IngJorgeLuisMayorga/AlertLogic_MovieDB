import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerInblockComponent } from './spinner-inblock.component';

describe('SpinnerInblockComponent', () => {
  let component: SpinnerInblockComponent;
  let fixture: ComponentFixture<SpinnerInblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerInblockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerInblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
