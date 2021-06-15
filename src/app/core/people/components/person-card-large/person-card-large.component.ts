import { Component, Input, OnInit } from '@angular/core';
import {IPerson} from '../../models/IPerson.model';

@Component({
  selector: 'app-person-card-large',
  templateUrl: './person-card-large.component.html',
  styleUrls: ['./person-card-large.component.less']
})
export class PersonCardLargeComponent implements OnInit {

  @Input()
  person!: IPerson;

  constructor() { }

  ngOnInit(): void {
  }


  getProfileSrc()    {
  if(this.person.profile_path){
    return 'http://image.tmdb.org/t/p/w780/' + this.person.profile_path
  } else {
    return '../../../../../assets/images/movie_placeholder.png'
  }
 
}
}
