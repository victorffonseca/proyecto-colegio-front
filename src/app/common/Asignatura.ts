import { Curso } from "./Curso";
import { Estudiante } from "./Estudiante";
import { Profesor } from "./Profesor";

export class Asignatura {
    id: number;
    nombre: string;
    curso: Curso;
    profesor: Profesor;
    estudiantes: Estudiante[];       
}