import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { RegisterRoutes } from './register.routes';
import { RegisterComponent } from './register.component';

import { SharedsModule } from '@shareds/shareds.module';
import { cCheckboxModule } from '@shareds/cCheckbox/cCheckbox.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        SharedsModule,
        cCheckboxModule,
        RegisterRoutes
    ],
    declarations: [
        RegisterComponent
    ],
    providers: [
        
    ]
})
export class RegisterModule {}
