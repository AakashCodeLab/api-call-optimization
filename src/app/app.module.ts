import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MydirDirective } from './mydir.directive';
import { CheckDirective } from './check.directive';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MydirDirective,
    CheckDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
