import { AlertComponent } from './alert/alert.component';

import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApixuService } from './apixu.service';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { createCustomElement } from '@angular/elements';
@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NgxChartsModule,
    MatTableModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [ApixuService],
  bootstrap: [AppComponent],
  entryComponents:[AlertComponent]
})

export class AppModule { 
  constructor(private injector : Injector){}
  ngDoBootstrap(){
      const el = createCustomElement(AlertComponent, {injector : this.injector});
  customElements.define('my-alert',el);
  }
}