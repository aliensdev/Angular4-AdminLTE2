require('@admin-lte/bootstrap/js/bootstrap.min.js');
require('@admin-lte/dist/js/app.min.js');
require('@admin-lte/plugins/slimScroll/jquery.slimscroll.min.js');
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { DashboardRoutes } from './dashboard.routes';
import { DashboardComponent } from './dashboard.component';

import { Topbar } from './layouts/topbar/topbar';
import { Sidebar } from './layouts/sidebar/sidebar';
import { Controlbar } from './layouts/controlbar/controlbar';
import { Footer } from './layouts/footer/footer';
import { Breadcrumb } from './layouts/breadcrumb/breadcrumb';

import { SharedsModule } from '@shareds/shareds.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        SharedsModule,
        DashboardRoutes
    ],
    declarations: [
        DashboardComponent,
        Topbar,
        Sidebar,
        Controlbar,
        Footer,
        Breadcrumb
    ],
    providers: [
        
    ]
})
export class DashboardModule {}
