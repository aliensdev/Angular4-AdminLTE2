require('@admin-lte/bootstrap/js/bootstrap.min.js');
require('@admin-lte/dist/js/app.min.js');
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AccountRoutes } from './account.routes';
import { AccountComponent } from './account.component';

import { SharedsModule } from '@shareds/shareds.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        SharedsModule,
        AccountRoutes
    ],
    declarations: [
        AccountComponent
    ],
    providers: [
        
    ]
})
export class AccountModule {}
