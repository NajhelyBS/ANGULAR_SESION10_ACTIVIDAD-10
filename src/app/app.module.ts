import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConjuntoModule } from 'secciones/conjunto/conjunto.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConjuntoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
