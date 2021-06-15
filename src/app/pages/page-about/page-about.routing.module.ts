
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from 'src/app/app.component';
import { PageAboutComponent } from './page-about.component';

export const pageAboutRoutes = [{
    path: 'about',
    component: PageAboutComponent,
    canActivate: [],
    children: [
        { path: '', component: PageAboutComponent },
    ]
  }
]

@NgModule({
    imports: [RouterModule.forChild(pageAboutRoutes)],
    exports: [RouterModule]
  })
  export class PageAboutRoutingModule { }