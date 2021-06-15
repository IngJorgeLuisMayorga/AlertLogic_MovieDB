import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageIndexComponent } from './page-index.component';
import { PageIndexRoutingModule } from './page-index.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { IndexNewsSectionComponent } from './components/index-news-section/index-news-section.component';
import { IndexRecommendedSectionComponent } from './components/index-recommended-section/index-recommended-section.component';
import { IndexTrendingSectionComponent } from './components/index-trending-section/index-trending-section.component';
import { IndexUpcomingSectionComponent } from './components/index-upcoming-section/index-upcoming-section.component';
import { IndexVideosSectionComponent } from './components/index-videos-section/index-videos-section.component';

const COMPONENTS = [
  PageIndexComponent,
  IndexNewsSectionComponent,
  IndexRecommendedSectionComponent,
  IndexTrendingSectionComponent,
  IndexUpcomingSectionComponent,
  IndexVideosSectionComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    SharedModule,
    PageIndexRoutingModule
  ]
})
export class PageIndexModule { }
