import { Component } from '@angular/core';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component {

  Tarea:String = "";
  Description:String = "";

  TransferirDatos (){
    alert(this.Tarea);
    alert(this.Description);

  }
}
