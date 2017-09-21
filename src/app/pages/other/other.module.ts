import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { routing } from './other.routing';

import { OtherComponent } from './other.component';
import { SearchComponent } from './search/search.component';
import { OtherDashboardComponent } from './other-dashboard/other-dashboard.component';

@NgModule({
  imports: [
    routing,
    SharedModule
  ],
  declarations: [
    OtherComponent,
    OtherDashboardComponent
  ]
})
export class OtherModule { }
