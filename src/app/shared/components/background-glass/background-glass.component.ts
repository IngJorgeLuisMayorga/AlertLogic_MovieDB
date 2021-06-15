import { Component, OnInit } from '@angular/core';
import { BackgroundService } from '../../services/background.service';

@Component({
  selector: 'app-background-glass',
  templateUrl: './background-glass.component.html',
  styleUrls: ['./background-glass.component.less']
})
export class BackgroundGlassComponent implements OnInit {

  image = '';
  image$ = this.$bg.image$;

  constructor(private $bg: BackgroundService) { }

  ngOnInit(): void {
    this.image = '../../../../assets/images/main-bg-jl.jpg';
  }

}
