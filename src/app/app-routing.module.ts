import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignaturasProfesorComponent } from './component/asignaturas-profesor/asignaturas-profesor.component';
import { EstudiantesAsignaturaComponent } from './component/estudiantes-asignatura/estudiantes-asignatura.component';
import { ListaProfesoresComponent } from './component/lista-profesores/lista-profesores.component';

const routes: Routes = [
  { path: '', redirectTo: 'lista-profesores', pathMatch: 'full' },
  { path: 'lista-profesores', component: ListaProfesoresComponent },
  { path: 'asignaturas-profesor/:id', component: AsignaturasProfesorComponent },
  { path: 'estudiantes-asignatura/:id', component: EstudiantesAsignaturaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
