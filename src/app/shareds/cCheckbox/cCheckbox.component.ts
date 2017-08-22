import { Component, Input, Output, EventEmitter, forwardRef, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => cCheckboxComponent),
    multi: true
};

@Component({
    selector: 'cCheckbox',
    template: `<div class="checkbox icheck">
          <input id="{{id}}" type="checkbox" [(ngModel)]="value">
          <label for="{{id}}"><ng-content></ng-content></label>
      </div>`,
    styleUrls: ['./cCheckbox.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class cCheckboxComponent implements ControlValueAccessor, AfterViewInit{
    @Input() public customClass: any = {};

    @Input() public styles: any = {};

    @Input() public color: string = '';

    @Input() public skin: string = '';

    //Generate id of input
    private id: string = '_' + Math.random().toString(36).substr(2, 9);

    //The internal data model
    private innerValue: any = '';

    //Placeholders for the callbacks which are later provided
    //by the Control Value Accessor
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    //get accessor
    get value(): any {
        return this.innerValue;
    };

    //set accessor including call the onchange callback
    set value(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }

    //Set touched on blur
    onBlur() {
        this.onTouchedCallback();
    }

    //From ControlValueAccessor interface
    writeValue(value: any) {
        //outer changed
        if (value !== this.innerValue) {
            this.innerValue = value;
            let el: any = $('input#'+this.id);
            el.iCheck('toggle');
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

    ngAfterViewInit() {
        let el: any = $('input#'+this.id);
        this.createIcheck();
    }

    private createIcheck(){
        let checkbox: any = {
          customClass: this.setCustomClass(this.customClass || ''),
          color: this.styles.color || this.color || '',
          skin: this.styles.skin || this.skin || 'square',
          checkboxClass: 'icheckbox_square',
          increaseArea: this.styles.increaseArea || '20%',
          isColorCode: false
        };
        let el: any = $('input#'+this.id);
        switch(checkbox.skin){
            case 'minimal'  :
            case 'square'   :
            case 'line'     :
                            checkbox.checkboxClass = 'icheckbox_' + checkbox.skin;
                            switch(checkbox.color){
                                case 'grey' :
                                case 'blue' :
                                case 'green':
                                case 'red'  :
                                            checkbox.checkboxClass += '-' + checkbox.color;
                                            break;
                                default:
                                             if(/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(checkbox.color)){
                                                checkbox.isColorCode = true;
                                                this.setCustomColor(checkbox.color);
                                             }
                                            break;
                            }
                            break;
        }
        el.parents('div.icheck').addClass(checkbox.customClass);
        if(checkbox.skin === 'line'){
          el.each(function(){
              var self = $(this),
                  label = self.next(),
                  label_text = label.html();
              label.remove();
              self.iCheck({
                  checkboxClass: checkbox.checkboxClass,
                  insert: '<div class="icheck_line-icon"></div>' + label_text
              });
          });
        } else {
          el.iCheck({
              checkboxClass: checkbox.checkboxClass,
              increaseArea: checkbox.increaseArea || '20%'
          });
        }
        el.on('ifChanged', event => {
            this.innerValue = event.target.checked;
            this.onChangeCallback(this.innerValue);
        });
    }

    private setCustomClass(cs: any = {}){
        let class_text: string = '';
        if(cs instanceof Array) {
            for(let c of cs) {
                class_text += ' '+c
            }
        } else if(cs instanceof Object) {
            for (var key in cs) {
                if (cs.hasOwnProperty(key)) {
                    if(key){
                        class_text += ' '+cs[key];
                    }
                }
            }
        } else {
            cs = cs.split(' ');
            for(let c of cs) {
                class_text += ' '+c
            }
        }
        return class_text;
    }

    private setCustomColor(color: string = '') {
        let el: any = $('input#'+this.id);
        console.log(color);
    }

}
