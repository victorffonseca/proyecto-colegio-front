import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProfesoresComponent } from './component/lista-profesores/lista-profesores.component';
import { AsignaturasProfesorComponent } from './component/asignaturas-profesor/asignaturas-profesor.component';
import { EstudiantesAsignaturaComponent } from './component/estudiantes-asignatura/estudiantes-asignatura.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProfesoresComponent,
    AsignaturasProfesorComponent,
    EstudiantesAsignaturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
