import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBrowseComponent } from './page-browse.component';
import { PageBrowseRoutingModule } from './page-browse.routing.module';



@NgModule({
  declarations: [
    PageBrowseComponent
  ],
  imports: [
    CommonModule,
    PageBrowseRoutingModule
  ]
})
export class PageBrowseModule { }
