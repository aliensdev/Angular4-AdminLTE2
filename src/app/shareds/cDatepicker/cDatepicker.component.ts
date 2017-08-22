import { Component, Input, OnDestroy, ViewEncapsulation, AfterViewInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import * as moment from 'moment';

import { cDatepickerConfig } from './cDatepicker.config';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => cDatepickerComponent),
    multi: true
};
@Component({
    selector: 'cDatepicker',
    template: `
        <input type="button" class="form-control datepicker" id="{{id}}">
    `,
    styleUrls: ['./cDatepicker.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class cDatepickerComponent implements OnDestroy, AfterViewInit{

    private id: string = '_' + Math.random().toString(36).substr(2, 9);
    @Input() public language: string = '';

    //The internal data model
    private innerValue: any = null;
    private startDate: any = null;
    private endDate: any = null;
    //Placeholders for the callbacks which are later provided
    //by the Control Value Accessor
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    @Input()
    set start(v: any) {
        var el = $('input#'+this.id);
        if (v !== this.startDate) {
            this.startDate = v;
        }
        if(v) {
            setTimeout(_=> {
                if(moment(this.startDate).isValid() && moment(this.innerValue).isValid()){
                    if(moment(this.startDate) > moment(this.innerValue)){
                        this.innerValue = new Date(this.startDate);
                        el.datepicker('setStartDate', new Date(this.innerValue));
                        el.datepicker('setDate', new Date(this.startDate));
                    }
                    else {
                        el.datepicker('setStartDate', new Date(this.startDate));
                        el.datepicker('setDate', new Date(this.innerValue));
                    }
                }

            });
        }
    }
    get start(): any {
        return this.startDate;
    };

    @Input()
    set end(v: any) {
        var el = $('input#'+this.id);
        if (v !== this.endDate) {
            this.endDate = v;
        }
        if(v) {
            setTimeout(_=> {
                el.datepicker('setEndDate', new Date(this.endDate));
            });
        }
    }
    get end(): any {
        return this.startDate;
    };

    writeValue(value: any) {
        //outer changed
        var el = $('input#'+this.id);
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
        if(this.startDate) {
            setTimeout(_=> {
                if(moment(this.startDate).isValid() && !moment(this.innerValue).isValid()){
                    this.innerValue = new Date(this.startDate);
                    el.datepicker('setStartDate', new Date(this.innerValue));
                    el.datepicker('setDate', new Date(this.startDate));
                    return;
                }
                el.datepicker('setDate', new Date(this.innerValue));
            });
        }
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }
    
    ngOnDestroy() {

    }

    ngAfterViewInit() {
        setTimeout(_=> {
            let el: any = $('input#'+this.id);
            el.datepicker({
                format: {
                    toDisplay: function (date, format, language) {
                        moment.locale(language);
                        let now_moment = moment(new Date(date));
                        return now_moment.format('LL');
                    },
                    toValue: function (date, format, language) {
                        return new Date(date);
                    }
                },
                language: this.language,
                orientation: 'bottom left',
                autoclose: true,
                todayBtn: false,
                todayHighlight: false,
                clearBtn: false,
                keyboardNavigation: false,
                templates: {
                    leftArrow: '<i class="fa fa-chevron-left"></i>',
                    rightArrow: '<i class="fa fa-chevron-right"></i>'
                }
            })
            .on('changeDate', e => {
                this.innerValue = e.date;
                this.onChangeCallback(new Date(e.date));
            })
            .datepicker('setDate', this.setDate())
            .datepicker('setStartDate', this.setStartDate())
            .datepicker('setEndDate', this.setEndDate());
        });
    }

    setDate(){
        if(moment(this.innerValue).isValid()){
            return new Date(this.innerValue);
        }
        return null;
    }

    setStartDate(){
        if(moment(this.startDate).isValid()){
            return new Date(this.startDate);
        }
        return null;
    }

    setEndDate(){
        if(moment(this.endDate).isValid()){
            return new Date(this.endDate);
        }
        return null;
    }

}