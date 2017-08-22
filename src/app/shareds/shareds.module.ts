import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgTranscludeDirective } from './_directives/ng-transclude.directive';
import { PageHeaderDirective } from './_directives/page-header.directive';
import { cTextAreaDirective } from './_directives/cTextarea.directive';
import { cValidateDirective } from './_directives/cValidate.directive';

const DIRECTIVES = [
    PageHeaderDirective,
    NgTranscludeDirective,
    cTextAreaDirective,
    cValidateDirective
];

const SERVICES = [

];

const GUARDS = [

];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        DIRECTIVES
    ],
    exports: [
        DIRECTIVES
    ]
})
export class SharedsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedsModule,
            providers: [
                SERVICES,
                GUARDS
            ]
        }
    }
}
