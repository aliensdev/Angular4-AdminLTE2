import { ElementRef, Input, HostListener, Directive} from '@angular/core';

@Directive({
    selector: 'page-header, [page-header]',
    exportAs: 'pageHeader'
})

export class PageHeaderDirective {
    @Input() public header: string = "Page Header";
    @Input() public description: string = "Page Description";
    constructor(public el: ElementRef){
        
    }

    ngAfterViewInit(){
        $(this.el.nativeElement).hide();
        $('#page-header').html(this.header);
        $('#page-header-description').html(this.description);
    }

}