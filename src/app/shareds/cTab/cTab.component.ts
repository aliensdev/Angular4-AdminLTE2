import { Component, HostBinding, Input, Output, EventEmitter, ElementRef, OnDestroy, ViewEncapsulation, TemplateRef } from '@angular/core';

import { cTabItemDirective } from './cTab-item.directive';
import { cTabConfig } from './cTab.config';
// todo: add active event to tab
// todo: fix? mixing static and dynamic tabs position tabs in order of creation
@Component({
    selector: 'cTab',
    template: `
        <div class="nav-tabs-custom" [class.no-bottom-margin]="modal">
            <ul class="nav nav-tabs tab-header" [class.pull-right]="position==='right'" [class.nav-justified]="justified">
                <ng-template ngFor let-tab [ngForOf]="tabs">
                    <li class="tab-heading" [class.active]="tab.active">
                        <a data-toggle="tab" [class.active]="tab.active" (click)="tab.active = true">
                            <span [ngTransclude]="tab.titleRef">{{tab.title}}</span>
                        </a>
                    </li>
                </ng-template>
                <li *ngIf="modal" (click)="closeModal(true)" class="pull-right text-muted" style="margin-top:8px;margin-right:10px;"><i class="fa fa-close" style="font-size:20px;"></i></li>
                <li class="header" [ngClass]="{'pull-right':position==='left','pull-left':position==='right'}" *ngIf="headingRef"><span [ngTransclude]="headingRef"></span></li>
            </ul>
            <div class="tab-content" [class.modal-body-tab]="scrollable">
                <ng-content></ng-content>
            </div>
            <div class="tab-footer box-footer" *ngIf="footerRef">
                <span [ngTransclude]="footerRef"></span>
            </div>
        </div>
    `,
    styleUrls: ['./cTab.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class cTabComponent implements OnDestroy {

    @HostBinding('class.tab-container') public clazz: boolean = true;
    public footerRef: TemplateRef<any>;
    public headingRef: TemplateRef<any>;
    @Input() public activeColor: string = '#3c8dbc';
    @Input() public modal: boolean = false;
    @Input() public scrollable: boolean = false;
    @Input() public justified: boolean = false;
    @Output() public close: EventEmitter<any> = new EventEmitter();
    closeModal(isclose: boolean = false) {
        if (isclose) {
            return this.close.emit(true);
        }
    }

    public tabs: cTabItemDirective[] = [];
    @Input() public position: string = 'left';
    protected isDestroyed: boolean;

    public constructor(config: cTabConfig, private el: ElementRef) {
        Object.assign(this, config);
    }

    public ngOnDestroy(): void {
        this.isDestroyed = true;
    }

    public addTab(tab: cTabItemDirective): void {
        this.tabs.push(tab);
        tab.active = this.tabs.length === 1 && tab.active !== false;
    }

    ngAfterViewInit() {
        if (this.modal) {
            $('.modal-body-tab').slimscroll({
                size: '3px',
                height: null
            });
        }
    }

    ngAfterContentChecked() {
        let boxHeaderHeight = $(this.el.nativeElement).find('ul.tab-header').outerHeight() || 0;
        let boxFooterHeight = $(this.el.nativeElement).find('div.tab-footer').outerHeight() || 0;
        let borderWidth = $(this.el.nativeElement).parentsUntil('div.modal-content').outerHeight() || 0 - $(this.el.nativeElement).parentsUntil('div.modal-content').innerHeight() || 0;
        let dialogMargin = $(window).width() < 768 ? 20 : 60;
        let contentHeight = $(window).height() - (dialogMargin + borderWidth);
        let maxHeight = contentHeight - (boxFooterHeight + boxHeaderHeight);
        if (this.modal && this.scrollable) {
            $('.modal-body-tab').css({
                'overflow': 'hidden',
                'max-height': maxHeight,
                'overflow-y': 'hidden'
            });
        }
    }

    public removeTab(tab: cTabItemDirective, options = { reselect: true, emit: true }): void {
        let index = this.tabs.indexOf(tab);
        if (index === -1 || this.isDestroyed) {
            return;
        }
        // Select a new tab if the tab to be removed is selected and not destroyed
        if (options.reselect && tab.active && this.hasAvailableTabs(index)) {
            let newActiveIndex = this.getClosestTabIndex(index);
            this.tabs[newActiveIndex].active = true;
        }
        if (options.emit) {
            tab.removed.emit(tab);
        }
        this.tabs.splice(index, 1);
        if (tab.elementRef.nativeElement.parentNode) {
            tab.elementRef.nativeElement.parentNode.removeChild(tab.elementRef.nativeElement);
        }
    }

    protected getClosestTabIndex(index: number): number {
        let tabsLength = this.tabs.length;
        if (!tabsLength) {
            return -1;
        }

        for (let step = 1; step <= tabsLength; step += 1) {
            let prevIndex = index - step;
            let nextIndex = index + step;
            if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
                return prevIndex;
            }
            if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
                return nextIndex;
            }
        }
        return -1;
    }

    protected hasAvailableTabs(index: number): boolean {
        let tabsLength = this.tabs.length;
        if (!tabsLength) {
            return false;
        }

        for (let i = 0; i < tabsLength; i += 1) {
            if (!this.tabs[i].disabled && i !== index) {
                return true;
            }
        }
        return false;
    }
}
