import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './../../shared/shared.module';
import { routing } from './stock.routing';

import { StockComponent } from './stock.component'
import { StockDashboardComponent } from './stock-dashboard/stock-dashboard.component';

@NgModule({
  imports: [
    SharedModule,
    routing,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    StockComponent,
    StockDashboardComponent
  ]
})
export class StockModule { }
