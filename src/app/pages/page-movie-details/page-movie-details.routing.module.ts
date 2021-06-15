
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from 'src/app/app.component';
import { PageMovieDetailsComponent } from './page-movie-details.component';

export const pageBrowseRoutes = [{
    path: 'movie/:id',
    component: PageMovieDetailsComponent,
    canActivate: [],
    children: [
        { path: '', component: PageMovieDetailsComponent },
    ]
  }
]

@NgModule({
    imports: [RouterModule.forChild(pageBrowseRoutes)],
    exports: [RouterModule]
  })
  export class PageMovieDetailsRoutingModule { }