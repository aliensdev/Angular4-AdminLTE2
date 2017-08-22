import { Directive, TemplateRef } from '@angular/core';

import { cBoxComponent } from './cBox.component';

@Directive({selector: '[cBox-tools]'})
export class cBoxToolsDirective {

    public templateRef: TemplateRef<any>;

    public constructor(templateRef: TemplateRef<any>, box: cBoxComponent) {
        box.toolsRef = templateRef;
    }
}