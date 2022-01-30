import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Asignatura } from '../common/Asignatura';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.apiUrlBase + 'asignaturas';
  }

  obtenerAsignaturas(): Observable<Asignatura[]> {
    return this.httpClient.get<Asignatura[]>(this.baseUrl).pipe(map(response => response));
  }

  obtenerAsignaturasPorProfesor(id: number): Observable<Asignatura[]> {
    return this.httpClient.get<Asignatura[]>(this.baseUrl + '/profesor/' + id).pipe(map(response => response));
  }

  obtenerAsignaturaPorId(id: number): Observable<Asignatura> {
    return this.httpClient.get<Asignatura>(this.baseUrl + '/' + id).pipe(map(response => response));
  }
}
