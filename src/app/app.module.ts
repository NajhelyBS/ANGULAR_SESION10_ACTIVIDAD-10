import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { C2Component } from 'secciones/conjunto/c2/c2.component';
import { C3Component } from 'secciones/conjunto/c3/c3.component';
import { C4Component } from 'secciones/conjunto/c4/c4.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    C2Component,
    C3Component,
    C4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
