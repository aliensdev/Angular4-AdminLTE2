import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedsModule } from '@shareds/shareds.module';
import { cSelectComponent } from './cSelect.component';
import { cSelectConfig } from './cSelect.config';

@NgModule({
  declarations: [
    cSelectComponent
  ],
  imports: [
    CommonModule,
     FormsModule,
     SharedsModule
   ],
  exports: [
    cSelectComponent
  ],
  providers: [
    cSelectConfig
  ]
})
export class cSelectModule {
  static forRoot(): ModuleWithProviders {
      return {
          ngModule: cSelectModule,
          providers: [
            cSelectConfig
          ]
      }
    }
}
