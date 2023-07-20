import { Component, inject } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumno.interface';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  newAlumno: Alumno = {nombre:'', edad: 0, email:'', curso: ''};
  alumnosService = inject(AlumnosService);
  getData():void {
  //deberiamos insertar estos datos en el array principal que esta en el Services.
  let response = this.alumnosService.insert(this.newAlumno);
  this.newAlumno = {nombre:'', edad: 0, email:'', curso: ''};
  if(response === "duplicado"){
    alert('Alumno duplicado');
  }
 }
}
