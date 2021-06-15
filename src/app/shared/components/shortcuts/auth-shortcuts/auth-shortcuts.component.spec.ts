import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthShortcutsComponent } from './auth-shortcuts.component';

describe('AuthShortcutsComponent', () => {
  let component: AuthShortcutsComponent;
  let fixture: ComponentFixture<AuthShortcutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthShortcutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthShortcutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
