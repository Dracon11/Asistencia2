import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PrincipalComponent } from './principal.component';
import { PrincipalDashboardComponent } from './principal-dashboard/principal-dashboard.component';

export const routes: Routes = [
    {
        path: '',
        component: PrincipalComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

            { path: 'dashboard', component: PrincipalDashboardComponent, data: { breadcrumb: 'Principal Dashboard' } },
       ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
