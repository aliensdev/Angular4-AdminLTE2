import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, TemplateRef, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'cBox',
    template: `
        <div class="box box-solid" [class.no-bottom-margin]="modal">
            <div class="box-header with-border">
                <h3 class="box-title">
                    <span class="box-title" [ngTransclude]="headingRef">{{heading}}</span>
                </h3>
                <ul class="box-tools pull-right" style="font-size:20px;">
                    <li class="box-title"><span [ngTransclude]="toolsRef"></span></li>
                    <li *ngIf="modal" (click)="closeModal(true)" class="box-title"><i class="fa fa-close"></i></li>
                </ul>
            </div>
            <div class="box-body" [class.modal-body-box]="modal">
                <ng-content></ng-content>
            </div>
            <div class="overlay" *ngIf="loading">
              <i class="fa fa-circle-o-notch fa-spin"></i>
            </div>
            <div class="box-footer" *ngIf="footerRef">
                <span [ngTransclude]="footerRef"></span>
            </div>
        </div>
    `,
    styleUrls: ['./cBox.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class cBoxComponent implements AfterViewInit {

    @Input() public heading: string;
    _loading: boolean = false;
    get loading() {
        return this._loading;
    }
    @Input()
    set loading(val) {
        if (val !== this._loading) {
            this._loading = val
        }
    }

    @Input() public modal: boolean = false;
    @Input() public scrollable: boolean = false;
    @Output() public close: EventEmitter<any> = new EventEmitter();
    closeModal(isclose: boolean = false) {
        if (isclose) {
            return this.close.emit(true);
        }
    }

    public headingRef: TemplateRef<any>;
    public toolsRef: TemplateRef<any>;
    public footerRef: TemplateRef<any>;

    constructor(private el: ElementRef) {

    }

    ngAfterViewInit() {
        if (this.modal) {
            $('.modal-body-box').slimscroll({
                size: '3px',
                height: null
            });
        }
    }

    ngAfterContentChecked() {
        let boxHeaderHeight = $(this.el.nativeElement).find('div.box-header').outerHeight() || 0;
        let boxFooterHeight = $(this.el.nativeElement).find('div.box-footer').outerHeight() || 0;
        let borderWidth = $(this.el.nativeElement).parentsUntil('div.modal-content').outerHeight() || 0 - $(this.el.nativeElement).parentsUntil('div.modal-content').innerHeight() || 0;
        let dialogMargin = $(window).width() < 768 ? 20 : 60;
        let contentHeight = $(window).height() - (dialogMargin + borderWidth);
        let maxHeight = contentHeight - (boxFooterHeight + boxHeaderHeight);
        if (this.modal && this.scrollable) {
            $('.modal-body-box').css({
                'overflow': 'hidden',
                'max-height': maxHeight,
                'overflow-y': 'hidden'
            });
        }
    }

}
