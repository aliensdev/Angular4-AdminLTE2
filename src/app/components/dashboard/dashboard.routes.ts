import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home'
    },
    {
        path: '',
        component: DashboardComponent,
        data: {
            breadcrumb: 'Dashboard'
        },
        children: [
            {
                path: 'home',
                loadChildren: './pages/home/home.module#HomeModule'
            }
        ]
        
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class DashboardRoutes {}