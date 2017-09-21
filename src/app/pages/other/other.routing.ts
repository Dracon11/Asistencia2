import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { OtherComponent } from './other.component';
import { OtherDashboardComponent } from './other-dashboard/other-dashboard.component';

export const routes: Routes = [
    {
        path: '',
        component: OtherComponent ,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: OtherDashboardComponent, data: { breadcrumb: 'Other Dashboard' } },
       ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
