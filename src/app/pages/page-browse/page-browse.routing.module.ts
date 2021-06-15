
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from 'src/app/app.component';
import { PageBrowseComponent } from './page-browse.component';

export const pageBrowseRoutes = [{
    path: 'browse',
    component: PageBrowseComponent,
    canActivate: [],
    children: [
        { path: '', component: PageBrowseComponent },
    ]
  }
]

@NgModule({
    imports: [RouterModule.forChild(pageBrowseRoutes)],
    exports: [RouterModule]
  })
  export class PageBrowseRoutingModule { }