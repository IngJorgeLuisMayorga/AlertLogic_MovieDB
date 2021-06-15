import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner-inblock',
  templateUrl: './spinner-inblock.component.html',
  styleUrls: ['./spinner-inblock.component.less']
})
export class SpinnerInblockComponent implements OnInit {

  @Input()
  enable! : boolean;
  
  constructor() { }

  ngOnInit(): void {
    console.log(' ')
  }

}
