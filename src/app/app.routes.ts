import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: '',
        component: AppComponent,
        children: [
            {
                path: 'account',
                loadChildren: './components/account/account.module#AccountModule'
            },
            {
                path: 'dashboard',
                loadChildren: './components/dashboard/dashboard.module#DashboardModule'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
    providers: []
})
export class AppRoutes { }