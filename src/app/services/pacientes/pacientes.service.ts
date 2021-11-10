import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PacientesService {
  private API_SERVI_PACIENTE = "http://localhost:8080/pacientes";

  constructor(
    private httpClient: HttpClient
  ) { }

  public traerPacientes(): Observable<any> {
    return this.httpClient.get(this.API_SERVI_PACIENTE);
  }

  public registrar(paciente:any): Observable<any>{
    return this.httpClient.post(this.API_SERVI_PACIENTE,paciente);
  }

  public borrarPaciente(id:any): Observable<any>{
    return this.httpClient.delete(this.API_SERVI_PACIENTE +"/"+id);
  }
}
