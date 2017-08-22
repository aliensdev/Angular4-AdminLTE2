import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { SharedsModule } from '@shareds/shareds.module';
import { cTabHeadingDirective } from './cTab-heading.directive';
import { cTabTitleDirective } from './cTab-title.directive';
import { cTabFooterDirective } from './cTab-footer.directive';
import { cTabItemDirective } from './cTab-item.directive';
import { cTabComponent } from './cTab.component';
import { cTabConfig } from './cTab.config';

@NgModule({
  imports: [
    CommonModule,
    SharedsModule
  ],
  declarations: [
    cTabItemDirective, 
    cTabComponent, 
    cTabHeadingDirective,
    cTabTitleDirective,
    cTabFooterDirective
  ],
  exports: [
    cTabItemDirective, 
    cTabComponent, 
    cTabHeadingDirective,
    cTabTitleDirective,
    cTabFooterDirective
  ],
  providers: [
    cTabConfig
  ]
})
export class cTabModule {
  static forRoot(): ModuleWithProviders {
        return {
            ngModule: cTabModule,
            providers: [
              cTabConfig
            ]
        }
    }
}
