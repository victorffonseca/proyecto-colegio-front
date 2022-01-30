import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Asignatura } from 'src/app/common/Asignatura';
import { Profesor } from 'src/app/common/Profesor';
import { AsignaturaService } from 'src/app/service/asignatura.service';
import { ProfesorService } from 'src/app/service/profesor.service';

@Component({
  selector: 'app-asignaturas-profesor',
  templateUrl: './asignaturas-profesor.component.html',
  styleUrls: ['./asignaturas-profesor.component.css']
})
export class AsignaturasProfesorComponent implements OnInit {

  profesor: Profesor;
  asignaturas: Asignatura[];
  id: number = 0;

  constructor(private asignaturaService: AsignaturaService,
    private profesorService: ProfesorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.profesor = new Profesor();
    this.cargarProfesor(this.id);
    this.cargarAsignaturas(this.id);
  }

  cargarProfesor(id: number) {
    this.profesorService.obtenerProfesorPorId(id).subscribe(
      data => {
        this.profesor = data;
      }
    );
  }

  cargarAsignaturas(id: number) {
    this.asignaturaService.obtenerAsignaturasPorProfesor(id).subscribe(
      data => {
        this.asignaturas = data;
      }
    );
  }

  verEstudiantes(id: number) {
    this.router.navigate(['estudiantes-asignatura', id]);
  }

  regresarAProfesores() {
    this.router.navigate(['lista-profesores']);
  }
}
