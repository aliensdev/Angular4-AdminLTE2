import { Directive, TemplateRef } from '@angular/core';

import { cBoxComponent } from './cBox.component';

@Directive({selector: '[cBox-heading]'})
export class cBoxHeadingDirective {

    public templateRef: TemplateRef<any>;

    public constructor(templateRef: TemplateRef<any>, box: cBoxComponent) {
        box.headingRef = templateRef;
    }
}