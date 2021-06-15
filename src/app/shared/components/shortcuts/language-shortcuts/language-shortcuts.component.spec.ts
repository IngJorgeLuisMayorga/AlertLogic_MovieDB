import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageShortcutsComponent } from './language-shortcuts.component';

describe('LanguageShortcutsComponent', () => {
  let component: LanguageShortcutsComponent;
  let fixture: ComponentFixture<LanguageShortcutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageShortcutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageShortcutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
