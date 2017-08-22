import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedsModule } from '@shareds/shareds.module';
import { cRadioComponent } from './cRadio.component';
import { cRadioConfig } from './cRadio.config';

@NgModule({
  declarations: [
    cRadioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedsModule
  ],
  exports: [
    cRadioComponent
  ],
  providers: [
    cRadioConfig
  ]
})
export class cRadioModule {
  static forRoot(): ModuleWithProviders {
        return {
            ngModule: cRadioModule,
            providers: [
              cRadioConfig
            ]
        }
    }
}
