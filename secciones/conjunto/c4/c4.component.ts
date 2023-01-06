import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.css']
})
export class C4Component {
  @Input()  Tarea:String = "";
  @Input()  Description:String = "";

  tareas:String[] = [];
  descripciones:String[] = [];

  show = false;
  
  printData(){
    this.tareas.push(String(this.Tarea));
    this.descripciones.push(String(this.Description));

  }
}
