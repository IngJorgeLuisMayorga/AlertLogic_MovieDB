import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-shortcuts',
  templateUrl: './media-shortcuts.component.html',
  styleUrls: ['./media-shortcuts.component.less']
})
export class MediaShortcutsComponent implements OnInit {

  isMute = false;

  constructor() { }

  ngOnInit(): void {
    console.log(' ')
  }

  setToogleMute(){
     this.isMute = !this.isMute;
  }

}
