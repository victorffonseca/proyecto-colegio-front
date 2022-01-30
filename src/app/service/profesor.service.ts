import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profesor } from '../common/Profesor';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.apiUrlBase + 'profesores';
  }

  obtenerProfesores(): Observable<Profesor[]> {
    return this.httpClient.get<Profesor[]>(this.baseUrl).pipe(map(response => response));
  }

  obtenerProfesorPorId(id: number): Observable<Profesor> {
    return this.httpClient.get<Profesor>(this.baseUrl + '/' + id).pipe(map(response => response));
  }
}
