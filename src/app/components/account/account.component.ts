import { Component, ViewContainerRef, OnInit, ViewEncapsulation, Injector } from '@angular/core';

@Component({
    templateUrl: './account.component.html',
    styleUrls: [
        './account.component.scss'
    ],
    encapsulation: ViewEncapsulation.None
})
export class AccountComponent implements OnInit {

    public constructor() {}

    ngOnInit(): void {
        
    }
}