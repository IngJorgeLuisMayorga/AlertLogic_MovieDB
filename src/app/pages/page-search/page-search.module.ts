import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageSearchComponent } from './page-search.component';
import { PageSearchRoutingModule } from './page-search.routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { CoreModule } from 'src/app/core/core.module';
import { MoviesModule } from 'src/app/core/movies/movies.module';
import { PeopleModule } from 'src/app/core/people/people.module';



@NgModule({
  declarations: [
    PageSearchComponent
  ],
  imports: [
    CommonModule,
    MoviesModule,
    PeopleModule,
    FormsModule,
    SharedModule,
    MatTabsModule,
    PageSearchRoutingModule
  ]
})
export class PageSearchModule { }
