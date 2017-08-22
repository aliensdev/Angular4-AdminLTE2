import { Component, Injector, ViewEncapsulation } from '@angular/core';
import { MenuItem } from '@shareds/_models/menu-item';
@Component({
    templateUrl: './sidebar.html',
    selector: 'side-bar',
    encapsulation: ViewEncapsulation.None
})

export class Sidebar {
    menuItems: MenuItem[] = [
        new MenuItem("Dashboard2", "dashboard", "/dashboard/home2"),
        new MenuItem("Blind Page", "link", "", [
            new MenuItem("Blind1", "circle-o", "", [
                new MenuItem("inBlind1", "circle-o", "/dashboard/inblind1"),
                new MenuItem("inBlind12", "circle-o", "/dashboard/inblind12"),
            ]),
            new MenuItem("Blind2", "circle-o", "", [
                new MenuItem("inBlind2", "circle-o", "/dashboard/inblind2"),
                new MenuItem("Dashboard", "dashboard", "/dashboard/home"),
                new MenuItem("inBlind21", "circle-o", "/dashboard/inblind21"),
            ]),
            new MenuItem("Blind3", "circle-o", "/dashboard/blind3"),
        ], "blind"),
        new MenuItem("Pages", "link", "", [
            new MenuItem("Page1", "circle-o", "/dashboard/page1"),
            new MenuItem("Page2", "circle-o", "/dashboard/page2"),
            new MenuItem("Page3", "circle-o", "/dashboard/page3")
        ]),
    ];

    constructor() {

    }

    checkActive(item: MenuItem) {
        let active: boolean = false;
        for (let menu of item.items) {
            if (menu.items) {
                for (let sub of menu.items) {

                }
            } else {

            }
        }
        return active;
    }
}