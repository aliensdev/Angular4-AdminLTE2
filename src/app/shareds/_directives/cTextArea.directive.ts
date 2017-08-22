import { ElementRef, HostListener, Directive} from '@angular/core';

@Directive({
    selector: 'textarea[cTextarea]'
})

export class cTextAreaDirective{
    @HostListener('input',['$event.target'])

    onInput(textArea: HTMLTextAreaElement): void {
      this.autosize();
    }

    constructor(public el: ElementRef){

    }

    ngAfterContentInit(): void{
      this.autosize();
    }

    autosize(): void{
      let el = $(this.el.nativeElement);
      el.css('overflow', 'hidden');
      el.css('height', 'auto');
      el.css('height', el[0].scrollHeight);
      el.css('resize', 'none');
    }
}
