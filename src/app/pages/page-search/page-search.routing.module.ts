
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from 'src/app/app.component';
import { PageSearchComponent } from './page-search.component';

export const pageIndexRoutes = [{
    path: 'search',
    component: PageSearchComponent,
    canActivate: [],
    children: [
        { path: '', component: PageSearchComponent },
    ]
  }
]

@NgModule({
    imports: [RouterModule.forChild(pageIndexRoutes)],
    exports: [RouterModule]
  })
  export class PageSearchRoutingModule { }