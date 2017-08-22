import { Component, ViewContainerRef, OnInit, ViewEncapsulation, Injector } from '@angular/core';

@Component({
    templateUrl: './login.component.html',
    styleUrls: [
        './login.component.scss'
    ],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
    public rember_me: boolean = false;
    public constructor() {}

    ngOnInit(): void {
        $('body').removeAttr('class');
        $('body').addClass('hold-transition');
        $('body').addClass('login-page');
    }
}