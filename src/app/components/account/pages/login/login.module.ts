import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }    from '@angular/common';

import { LoginRoutes } from './login.routes';
import { LoginComponent } from './login.component';

import { SharedsModule } from '@shareds/shareds.module';
import { cCheckboxModule } from '@shareds/cCheckbox/cCheckbox.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LoginRoutes,
        SharedsModule,
        cCheckboxModule
    ],
    declarations: [
        LoginComponent
    ],
    exports: [
        
    ],
    providers: [
        
    ]
})
export class LoginModule {}
