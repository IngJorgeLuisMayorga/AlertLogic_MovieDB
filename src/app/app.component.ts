import { Component, OnInit } from '@angular/core';
import { BackgroundService } from './shared/services/background.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  
  title = 'ng-alert-logic-movie-db';
  isLoad = true;

  constructor(private $bg: BackgroundService){}

  ngOnInit(){
    setTimeout(() =>  this.isLoad = true, 5000)
    this.$bg.setImage('../../../../assets/images/main-bg-jl.jpg')
  }

}
