import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Asignatura } from 'src/app/common/Asignatura';
import { Curso } from 'src/app/common/Curso';
import { Estudiante } from 'src/app/common/Estudiante';
import { AsignaturaService } from 'src/app/service/asignatura.service';

@Component({
  selector: 'app-estudiantes-asignatura',
  templateUrl: './estudiantes-asignatura.component.html',
  styleUrls: ['./estudiantes-asignatura.component.css']
})
export class EstudiantesAsignaturaComponent implements OnInit {

  asignatura: Asignatura;
  id: number = 0;

  constructor(private asignaturaService: AsignaturaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.asignatura = new Asignatura();
    this.asignatura.curso = new Curso();
    this.cargarAsignatura(this.id);
  }

  cargarAsignatura(id: number) {
    this.asignaturaService.obtenerAsignaturaPorId(id).subscribe(
      data => {
        this.asignatura = data;
      }
    );
  }

  regresarAAsignaturas() {
    this.router.navigate(['asignaturas-profesor', this.asignatura.profesor.id]);
  }

}
