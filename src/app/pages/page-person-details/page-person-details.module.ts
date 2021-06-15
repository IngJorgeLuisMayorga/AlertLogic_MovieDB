import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePersonDetailsComponent } from './page-person-details.component';
import { PagePersonDetailsRoutingModule } from './page-person-details.routing.module';



@NgModule({
  declarations: [
    PagePersonDetailsComponent
  ],
  imports: [
    CommonModule,
    PagePersonDetailsRoutingModule
  ]
})
export class PagePersonDetailsModule { }
