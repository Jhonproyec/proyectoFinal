import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {
  private API_SERVI = "http://localhost:8080/medicos";

  constructor(
    private httpClient: HttpClient
  ) { }

  public traerMedicos(): Observable<any> {
    return this.httpClient.get(this.API_SERVI);
  }

  public guardarMedico(medico:any): Observable<any>{
    return this.httpClient.post(this.API_SERVI,medico);
  }

  public borrarMedico(id:any): Observable<any>{
    return this.httpClient.delete(this.API_SERVI +"/"+id);
  }


}
