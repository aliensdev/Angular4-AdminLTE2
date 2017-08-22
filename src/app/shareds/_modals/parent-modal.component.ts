import { NgModule, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { cDatepickerModule } from '@shareds/cDatepicker/cDatepicker.module';
import { cBoxModule } from '@shareds/cBox/cBox.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalDirective, ModalModule } from 'ngx-bootstrap';
import * as moment from 'moment';
@Component({
    selector: 'parentModal',
    templateUrl: './parent-modal.component.html'
})
export class ParentModalComponent {

    @ViewChild('parentModal') parentModal: ModalDirective;
    @ViewChild('parentContentModal') parentContentModal: ElementRef;

    active: boolean = false;

    constructor() {}

    date_form = moment();
    d_start = moment('2017-08-05');
    d_end = moment('2017-08-30');
    date_form_start = moment();
    date_form_end = null;

    show(): void {
        this.active = true;
        this.parentModal.show();
    }

    onShown(): void {

    }

    onClose($event): void {
        if($event){
            this.close();
        }
    }

    close(): void {
        this.active = false;
        this.parentModal.hide();
    }
}

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ModalModule,
        cDatepickerModule,
        cBoxModule
    ],
    declarations: [
        ParentModalComponent
    ],
    exports: [
        ParentModalComponent
    ]
})
export class ParentModalModule {

}