import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { routing } from './principal.routing';

import { PrincipalComponent } from './principal.component';
import { PrincipalDashboardComponent } from './principal-dashboard/principal-dashboard.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PrincipalComponent,
    PrincipalDashboardComponent,
  ]
})
export class PrincipalModule { }
