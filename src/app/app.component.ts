import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .modal-content  {
        -webkit-border-radius: 5px !important;
        -moz-border-radius: 5px !important;
        border-radius: 5px !important; 
    }
  `],
  template: '<router-outlet></router-outlet>'
})

export class AppComponent implements OnInit {

  constructor() {

  }

  public ngOnInit() {

  }

}
