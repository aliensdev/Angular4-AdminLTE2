import { Component, ViewContainerRef, OnInit, ViewEncapsulation, Injector } from '@angular/core';

@Component({
    templateUrl: './register.component.html',
    styleUrls: [
        './register.component.scss'
    ],
    encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
    public agree: boolean = false;
    public constructor() {}

    ngOnInit(): void {
        $('body').removeAttr('class');
        $('body').addClass('hole-transition');
        $('body').addClass('register-page');
    }
}