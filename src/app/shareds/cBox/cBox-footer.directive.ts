import { Directive, TemplateRef } from '@angular/core';

import { cBoxComponent } from './cBox.component';

@Directive({selector: '[cBox-footer]'})
export class cBoxFooterDirective {

    public templateRef: TemplateRef<any>;

    public constructor(templateRef: TemplateRef<any>, box: cBoxComponent) {
        box.footerRef = templateRef;
    }
}