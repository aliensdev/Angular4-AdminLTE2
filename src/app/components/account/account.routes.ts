import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login'
    },
    {
        path: '',
        component: AccountComponent,
        children: [
            {
                path: 'login',
                loadChildren: './pages/login/login.module#LoginModule'
            },
            {
                path: 'register',
                loadChildren: './pages/register/register.module#RegisterModule'
            }
        ]
        
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class AccountRoutes {}