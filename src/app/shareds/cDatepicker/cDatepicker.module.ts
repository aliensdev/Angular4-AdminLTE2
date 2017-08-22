import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { SharedsModule } from '@shareds/shareds.module';
import { cDatepickerComponent } from './cDatepicker.component';
import { cDatepickerConfig } from './cDatepicker.config';

@NgModule({
  imports: [
    CommonModule,
    SharedsModule
  ],
  declarations: [
    cDatepickerComponent
  ],
  exports: [
    cDatepickerComponent,
  ],
  providers: [
    cDatepickerConfig
  ]
})
export class cDatepickerModule {
  static forRoot(): ModuleWithProviders {
        return {
            ngModule: cDatepickerModule,
            providers: [
                cDatepickerConfig
            ]
        }
    }
}
