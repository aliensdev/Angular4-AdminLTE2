import { Directive, TemplateRef } from '@angular/core';

import { cTabComponent } from './cTab.component';

@Directive({selector: '[cTab-heading]'})
export class cTabHeadingDirective {

    public templateRef: TemplateRef<any>;

    public constructor(templateRef: TemplateRef<any>, tab: cTabComponent) {
        tab.headingRef = templateRef;
    }
}