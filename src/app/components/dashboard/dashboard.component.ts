import { Component, ViewContainerRef, OnInit, AfterViewInit, ViewEncapsulation, Injector } from '@angular/core';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: [
        './dashboard.component.scss'
    ],
    encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit, AfterViewInit {

    public constructor() {}

    ngOnInit(): void {

    }

    ngAfterViewInit(): void {
        $('body').removeAttr('class');
        $('body').addClass('hold-transition');
        $('body').addClass('skin-blue');
        $('body').addClass('sidebar-mini');
        
        try {
            var o = $.AdminLTE.options;
            //Activate the layout maker
            $.AdminLTE.layout.activate();

            //Enable sidebar tree view controls
            $.AdminLTE.tree('.sidebar');

            //Enable control sidebar
            if (o.enableControlSidebar) {
                $.AdminLTE.controlSidebar.activate();
            }

            //Add slimscroll to navbar dropdown
            if (o.navbarMenuSlimscroll && typeof $.fn.slimscroll != 'undefined') {
                $(".navbar .menu").slimscroll({
                height: o.navbarMenuHeight,
                alwaysVisible: false,
                size: o.navbarMenuSlimscrollWidth
                }).css("width", "100%");
            }

            //Activate Bootstrap tooltip
            if (o.enableBSToppltip) {
                $('body').tooltip({
                selector: o.BSTooltipSelector
                });
            }

            //Activate box widget
            if (o.enableBoxWidget) {
                $.AdminLTE.boxWidget.activate();
            }

            //Activate fast click
            //if (o.enableFastclick && typeof FastClick != 'undefined') {
            //    FastClick.attach(document.body);
            //}
        }
        catch(err) {
            //console.log(err);
        }
    }
}