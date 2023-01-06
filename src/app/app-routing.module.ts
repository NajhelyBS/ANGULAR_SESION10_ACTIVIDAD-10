import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C1Component } from 'secciones/conjunto/c1/c1.component';
import { AppComponent } from './app.component';


const routes: Routes = [{
  path:"" , component: C1Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
