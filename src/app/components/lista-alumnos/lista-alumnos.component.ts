import { Component, inject } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumno.interface';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent {
  alumnos:Alumno[] = [];
  alumnosService = inject(AlumnosService); //opcion 2 para inyectar dependencias.
//opcion 1 para inyectar dependencias
  constructor(/*private alumnosService: AlumnosService */) { }

  ngOnInit(): void {
    this.alumnos = this.alumnosService.getAll();
  }

  getDataCourse($event:any) {
    let course = $event.target.value;
    this.alumnos = this.alumnosService.getByCourse(course);
  }

}
