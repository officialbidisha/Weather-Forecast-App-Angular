import { AlertComponent } from './alert/alert.component';
import { Component, inject, Injector } from '@angular/core';
import {createCustomElement} from "@angular/elements";
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {

  constructor(private domSanitizer: DomSanitizer){}
  title = 'WeatherApp';
  content = this.domSanitizer.bypassSecurityTrustHtml("<my-alert message='hey there'></my-alert>");

}
