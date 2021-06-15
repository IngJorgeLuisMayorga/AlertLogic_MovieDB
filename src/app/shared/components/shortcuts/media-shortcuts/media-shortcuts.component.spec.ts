import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaShortcutsComponent } from './media-shortcuts.component';

describe('MediaShortcutsComponent', () => {
  let component: MediaShortcutsComponent;
  let fixture: ComponentFixture<MediaShortcutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaShortcutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaShortcutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
