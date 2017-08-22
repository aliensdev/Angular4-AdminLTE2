import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { cBoxComponent } from './cBox.component';
import { cBoxConfig } from './cBox.config';
import { cBoxHeadingDirective } from './cBox-heading.directive'
import { cBoxToolsDirective } from './cBox-tools.directive'
import { cBoxFooterDirective } from './cBox-footer.directive'
import { SharedsModule } from '@shareds/shareds.module';

@NgModule({
  declarations: [
    cBoxComponent,
    cBoxHeadingDirective,
    cBoxToolsDirective,
    cBoxFooterDirective
  ],
  imports: [ 
    CommonModule,
    FormsModule,
    SharedsModule
  ],
  exports: [
    cBoxComponent,
    cBoxHeadingDirective,
    cBoxToolsDirective,
    cBoxFooterDirective
  ],
  providers: [
    cBoxConfig
  ]
})
export class cBoxModule {
  static forRoot(): ModuleWithProviders {
        return {
            ngModule: cBoxModule,
            providers: [
                cBoxConfig
            ]
        }
    }
}
