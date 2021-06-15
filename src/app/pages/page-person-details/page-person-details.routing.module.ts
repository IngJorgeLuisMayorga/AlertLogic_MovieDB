
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from 'src/app/app.component';
import { PagePersonDetailsComponent } from './page-person-details.component';

export const pageBrowseRoutes = [{
    path: 'person/:id',
    component: PagePersonDetailsComponent,
    canActivate: [],
    children: [
        { path: '', component: PagePersonDetailsComponent },
    ]
  }
]

@NgModule({
    imports: [RouterModule.forChild(pageBrowseRoutes)],
    exports: [RouterModule]
  })
  export class PagePersonDetailsRoutingModule { }