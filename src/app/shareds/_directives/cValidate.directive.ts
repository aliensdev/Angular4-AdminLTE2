import { ElementRef, Input, HostListener, Directive} from '@angular/core';

@Directive({
    selector: 'input[cValidate]'
})

export class cValidateDirective {
get success(){
    return this._success;
}
@Input() 
set success(val){
    if(val.isSuccess !== this._success){
        this._success = {
            isSuccess: val.isSuccess,
            text: val.text,
            help: val.help
        }
        this.validate();
    }
}

get warning(){
    return this._warning;
}
@Input()
set warning(val){
    if(val.isWarning !== this._warning.isWarning){
        this._warning = {
            isWarning: val.isWarning,
            text: val.text,
            help: val.help
        }
        this.validate();
    }
}

get error(){
    return this._error;
}
@Input() 
set error(val){
    if(val.isError !== this._error.isError){
        this._error = {
            isError: val.isError,
            text: val.text,
            help: val.help
        }
        this.validate();
    }
}

_success: any = {};
_warning: any = {};
_error: any = {};

id = '_' + Math.random().toString(36).substr(2, 9);

input: any = {
    warning: this._warning,
    error: this._error,
    success: this._success
};

constructor(public el: ElementRef){

}

ngAfterContentInit() {
        let el = $(this.el.nativeElement);
        el.parents('div.form-group').removeClass('has-success');
        el.parents('div.form-group').removeClass('has-error');
        el.parents('div.form-group').removeClass('has-warning');
    }

    ngAfterViewInit() {
        this.initial();
    }

    private initial() {
        let el = $(this.el.nativeElement);
        let id = this.id;
        
        this.input = {
            warning: this._warning,
            error: this._error,
            success: this.success
        };
        el.attr('id', id);
        el.before(`<label class="control-label" type="warning_${id}" for="${id}"><i class="fa fa-bell-o"></i> ${this._warning.text}</label>`);
        el.before(`<label class="control-label" type="error_${id}" for="${id}"><i class="fa fa-times-circle-o"></i> ${this._error.text}</label>`);
        el.before(`<label class="control-label" type="success_${id}" for="${id}"><i class="fa fa-check"></i> ${this.success.text}</label>`);
        el.after(`<span for="${id}" type="warning_${id}" class="help-block"> ${this._warning.help}</span>`);
        el.after(`<span for="${id}" type="error_${id}" class="help-block"> ${this._error.help}</span>`);
        el.after(`<span for="${id}" type="success_${id}" class="help-block"> ${this._success.help}</span>`);
        this.validate();
    }

    validate() {
        let el = $(this.el.nativeElement);
        let id = this.id;
        $(`[type="success_${id}"]`).hide();
        $(`[type="warning_${id}"]`).hide();
        $(`[type="error_${id}"]`).hide();
        el.parents('div.form-group').removeClass('has-success');
        el.parents('div.form-group').removeClass('has-warning');
        el.parents('div.form-group').removeClass('has-error');
        if(this._success.isSuccess&&this._success.text){
            el.parents('div.form-group').addClass('has-success');
            $(`[type="success_${id}"]`).show();
        }
        else if(this._warning.isWarning&&this._warning.text){
            el.parents('div.form-group').addClass('has-warning');
            $(`[type="warning_${id}"]`).show();
        }
        else if(this._error.isError&&this._error.text){
            el.parents('div.form-group').addClass('has-error');
            $(`[type="error_${id}"]`).show();
        }
    }
}