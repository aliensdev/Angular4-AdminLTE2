import { Directive, TemplateRef } from '@angular/core';

import { cTabItemDirective } from './cTab-item.directive';

@Directive({selector: '[cTab-title]'})
export class cTabTitleDirective {

    public templateRef: TemplateRef<any>;

    public constructor(templateRef: TemplateRef<any>, tab: cTabItemDirective) {
        tab.titleRef = templateRef;
    }
}