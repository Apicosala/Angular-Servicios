import { Injectable } from '@angular/core';
import { Alumno } from '../interfaces/alumno.interface';
import { ALUMNOS } from '../db/alumnos.db';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private arrAlumnos:Alumno[] = ALUMNOS;
  private id:number = 4;

   //getAll me devuelve un array de alumnos
   getAll():Alumno[]{
    return this.arrAlumnos;
   }
   getByCourse(course:string):Alumno[]{
      return this.arrAlumnos.filter(alumno => alumno.curso.includes(course));
    }
  insert(alumno:Alumno): string {
    let alumnoDuplicado = this.arrAlumnos.findIndex(student => student.email === alumno.email);
    if(alumnoDuplicado === -1){
    alumno.id = this.id;
    this.arrAlumnos.push(alumno);
    this.id++;
    return "ok";
    }else{
      return "duplicado";
    }
  }
}
