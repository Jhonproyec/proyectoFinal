import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class especialidadesService {
  private API_SERVI = "http://localhost:8080/especialidades/";

  constructor(
    private httpClient: HttpClient
  ) { }

  public traerEspecialidad(): Observable<any> {
    return this.httpClient.get(this.API_SERVI);
  }

  public guardarEspecialidad(especialidades:any): Observable<any>{
    return this.httpClient.post(this.API_SERVI,especialidades);
  }

  public borrarEspecialidad(id:any): Observable<any>{
    return this.httpClient.delete(this.API_SERVI +"/"+id);
  }
}
