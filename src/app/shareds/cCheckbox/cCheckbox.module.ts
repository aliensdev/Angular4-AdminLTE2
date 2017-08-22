import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedsModule } from '@shareds/shareds.module';
import { cCheckboxComponent } from './cCheckbox.component';
import { cCheckboxConfig } from './cCheckbox.config';

@NgModule({
  declarations: [
    cCheckboxComponent
  ],
  imports: [ 
    CommonModule,
    FormsModule,
    SharedsModule
  ],
  exports: [
    cCheckboxComponent
  ],
  providers: [
    cCheckboxConfig
  ]
})
export class cCheckboxModule {
  static forRoot(): ModuleWithProviders {
        return {
            ngModule: cCheckboxModule,
            providers: [
                cCheckboxConfig
            ]
        }
    }
}
