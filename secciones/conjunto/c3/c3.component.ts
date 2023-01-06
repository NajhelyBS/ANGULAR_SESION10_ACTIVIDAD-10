import { Component, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component {

 Tarea:String = "";
 Description:String = "";

  @Output() TransferData = new EventEmitter<String>();
  
  SaveData(){
    this.TransferData.emit(this.Tarea);
    this.TransferData.emit(this.Description);
    if(this.Tarea == "" && this.Description == "" || this.Tarea == ""  || this.Description == ""){
      alert("Por favor, ingrese una tarea y una descripción")
    } else {
      alert("Datos guardados! - Puedes imprimirlos");
    }

  }
}
