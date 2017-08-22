import { NgModule, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { cTabModule } from '@shareds/cTab/cTab.module';
import { ModalDirective, ModalModule } from 'ngx-bootstrap';

@Component({
    selector: 'tabModal',
    templateUrl: './tab-modal.component.html'
})
export class TabModalComponent {

    @ViewChild('tabModal') tabModal: ModalDirective;
    @ViewChild('tabContentModal') tabContentModal: ElementRef;

    active: boolean = false;

    constructor() {}

    show(): void {
        this.active = true;
        this.tabModal.show();
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
        this.tabModal.hide();
    }
}

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ModalModule,
        cTabModule
    ],
    declarations: [
        TabModalComponent
    ],
    exports: [
        TabModalComponent
    ]
})
export class TabModalModule {

}