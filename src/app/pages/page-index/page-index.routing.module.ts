
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from 'src/app/app.component';
import { PageIndexComponent } from './page-index.component';

export const pageIndexRoutes = [{
    path: '',
    component: PageIndexComponent,
    canActivate: [],
    children: [
        { path: '', component: PageIndexComponent },
    ]
  }
]

@NgModule({
    imports: [RouterModule.forChild(pageIndexRoutes)],
    exports: [RouterModule]
  })
  export class PageIndexRoutingModule { }