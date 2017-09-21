import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { StockComponent } from './stock.component'
import { StockDashboardComponent } from './stock-dashboard/stock-dashboard.component';

export const routes: Routes = [
  {
      path: '',
      component: StockComponent,
      children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
        { path: 'dashboard', component: StockDashboardComponent, data: { breadcumb: 'Stock Dashboard'} }

      ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
