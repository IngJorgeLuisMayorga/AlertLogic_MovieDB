import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAboutComponent } from './page-about.component';
import { PageAboutRoutingModule } from './page-about.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    PageAboutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PageAboutRoutingModule
  ]
})
export class PageAboutModule { }
