import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageIndexModule } from './page-index/page-index.module';
import { PageAboutModule } from './page-about/page-about.module';
import { PageBrowseModule } from './page-browse/page-browse.module';
import { PageMovieDetailsModule } from './page-movie-details/page-movie-details.module';
import { PagePersonDetailsModule } from './page-person-details/page-person-details.module';
import { PageSearchComponent } from './page-search/page-search.component';
import { PageSearchModule } from './page-search/page-search.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
    PageIndexModule,
    PageAboutModule,
    PageBrowseModule,
    PageMovieDetailsModule,
    PagePersonDetailsModule,
    PageSearchModule
  ]
})
export class PagesModule { }
