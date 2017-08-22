import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { SharedsModule } from '@shareds/shareds.module';

import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';

const APP_PROVIDERS = [

];

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    SharedsModule.forRoot(),
    HttpModule,
    AppRoutes
  ],
  providers: [
    APP_PROVIDERS
  ]
})

export class AppModule {

  constructor(private appRef: ApplicationRef) {

  }
  
}
