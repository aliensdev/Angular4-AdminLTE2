import { Component, ViewContainerRef, ViewChild, OnInit, ViewEncapsulation, Injector, TemplateRef } from '@angular/core';
import { ParentModalComponent } from '@shareds/_modals/parent-modal.component';
import { TabModalComponent } from '@shareds/_modals/tab-modal.component';
import * as moment from 'moment';

@Component({
    templateUrl: './home.component.html',
    styleUrls: [
        './home.component.scss'
    ],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

    @ViewChild('parentModal') parentModal: ParentModalComponent;
    @ViewChild('tabModal') tabModal: TabModalComponent;

    constructor() {

    }

    showParentModal(){
      this.parentModal.show();
    }

    showTabModal(){
      this.tabModal.show();
    }

    public items: string[] = [
      'The first choice!',
      'And another choice for you.', 
      'but wait! A third!'
    ];

    date_form = moment();
    d_start = moment('2017-08-05');
    d_end = moment('2017-08-30');
    date_form_start = moment();
    date_form_end = null;
    files: FileList;
    lists_radio: any[] = [
      {
        value: 1,
        text: 'text1'
      },
      {
        value: 2,
        text: 'text2'
      },
      {
        value: 3,
        text: 'text3'
      },
      {
        value: 4,
        text: 'text4'
      },
      {
        value: 5,
        text: 'text5'
      },
      {
        value: 6,
        text: 'text6'
      },
      {
        value: 7,
        text: 'text7'
      }
    ];
    selected_radio = {
      value: 2,
      text: 'text2'
    };
    selected_dropdown = {
      value: 2,
      text: 'text2'
    };

    lists_checkbox: any[] = [
      {
        value: 1,
        text: 'text1',
        selected: false
      },
      {
        value: 2,
        text: 'text2',
        selected: true
      }
    ];

      form: any = {
          value: 2,
          text: 'text2'
      };

      lists:any = [
        {
          value: 1,
          text: 'text1'
        },
        {
          value: 2,
          text: 'text2'
        }

      ];
 
      form2 = {value: 'item2', text: "yyy"};
      form4 = {value: 'item2', text: "yyy"};

      text: string;

    ngOnInit(): void {

    }

    change(files) {
      this.files = files;
    }

    checkInt(text){
      if(text === 'int'){
        return true;
      }
      return false;
    }

}