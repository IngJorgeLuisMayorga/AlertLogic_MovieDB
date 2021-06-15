import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonCardLargeComponent } from './components/person-card-large/person-card-large.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PersonCardLargeComponent
  ],
  exports: [
    PersonCardLargeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PeopleModule { }
