import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profesor } from 'src/app/common/Profesor';
import { ProfesorService } from 'src/app/service/profesor.service';

@Component({
  selector: 'app-lista-profesores',
  templateUrl: './lista-profesores.component.html',
  styleUrls: ['./lista-profesores.component.css']
})
export class ListaProfesoresComponent implements OnInit {

  profesores: Profesor[];

  constructor(private profesorService: ProfesorService,
    private router: Router) { }

  ngOnInit(): void {
    this.cargarProfesores();
  }

  cargarProfesores() {
    this.profesorService.obtenerProfesores().subscribe(
      data => {
        this.profesores = data;
      }
    );
  }

  verAsignaturas(id: number) {
    this.router.navigate(['asignaturas-profesor', id]);
  }
}
