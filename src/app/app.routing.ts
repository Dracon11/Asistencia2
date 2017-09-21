import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { NotFoundComponent } from './layout/errors/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: 'app/auth/login/login.module#LoginModule' },
  { path: 'register', loadChildren: 'app/auth/register/register.module#RegisterModule' },
  { path: 'principal', loadChildren: 'app/pages/principal/principal.module#PrincipalModule' },
  { path: 'user', loadChildren: 'app/pages/stock/stock.module#StockModule' },
  { path: 'other', loadChildren: 'app/pages/other/other.module#OtherModule' },
  { path: '**', component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
   // useHash: true
});
