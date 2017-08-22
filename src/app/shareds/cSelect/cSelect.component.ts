import { Component, Input, Output, EventEmitter, forwardRef, AfterViewInit, ViewEncapsulation , OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => cSelectComponent),
    multi: true
};


@Component({
    selector: 'cSelect',
    template:`
        <select id="{{id}}" class="form-control select2" [(ngModel)]="selectModel.value" (change)="OnChange()">
            <ng-template ngFor let-list [ngForOf]="lists">
            <option [value]="list.value">{{list.text}}</option>
            </ng-template>
        </select>
    `,
    styleUrls: ['./cSelect.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class cSelectComponent implements OnInit, AfterViewInit{

  @Input() lists:any[] = [];

  constructor(){}

  ngOnInit() {}

   ngAfterViewInit() {
       setTimeout(_=> {
           let el: any = $('select#'+this.id);
           el.select2();
           el.on("select2:selecting", e => { 
                var id = e.params.args.data.id;
                var x = this.lists.filter(x => x.value == id)[0];
                x.value = 'number' == typeof(this.lists[0].value) ? +x.value : x.value+"";
                this.onChangeCallback(x);
           });
       });
   }
  //Generate id of input
    private id: string = '_' + Math.random().toString(36).substr(2, 9);

    public selectModel: any = {};

    //The internal data model
    private innerValue: any = [];

    //Placeholders for the callbacks which are later provided
    //by the Control Value Accessor
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    //get accessor
    get selected(): any {
        return this.lists.filter(x => x.value == this.selected.value)[0];
    };

    //set accessor including call the onchange callback
    set selected(v: any) {
        if (v.value !== this.innerValue.value) {
            this.selected.value = v.value;
            this.onChangeCallback(this.lists.filter(x => x.value == this.selected.value)[0]);
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
        }
        if(value && this.innerValue){
            this.selectModel = value;
            let el: any = $('select#'+this.id);
            el.select2().on("select2:open", function () {
                $('.select2-results__options').slimscroll({
                    height: '180px',
                    size: '3px',
                    alwaysVisible: false
                });
            });;
            el.select2().select2('val',value.value+"");
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

    public OnChange() {
        //console.log(this.selectModel);
        //console.log(this.selectModel);
        this.innerValue = this.lists.filter( x => x.value === this.selectModel.value)[0];
        this.onChangeCallback(this.innerValue);
    }

    public selectedValue(){

    }

}