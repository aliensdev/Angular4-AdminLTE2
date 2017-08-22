import { Directive, TemplateRef } from '@angular/core';

import { cTabComponent } from './cTab.component';

@Directive({selector: '[cTab-footer]'})
export class cTabFooterDirective {

    public templateRef: TemplateRef<any>;

    public constructor(templateRef: TemplateRef<any>, tab: cTabComponent) {
        tab.footerRef = templateRef;
    }
}