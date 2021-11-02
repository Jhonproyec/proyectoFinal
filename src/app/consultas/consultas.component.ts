import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConsultasService } from '../services/consultas/consultas.service';
import { MedicosService } from '../services/medicos/medicos.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {
  formularioConsultas: any;
  consultas: any;
  //En esta variable voy a guardar los datos de los medicos, para mostrarlas en los options del html
  medicos: any;

  constructor(
    public fb: FormBuilder,
    public consultasService: ConsultasService,
    //Aquí se está llamando al servicio de medicos 
    public medicosService: MedicosService,
  ) { }

  ngOnInit(): void {
    //Mostrar consultas
    this.consultasService.traerConsultas()?.subscribe(async consultas => {
      this.consultas = await consultas;});
    
    //Aquí estoy obteniendo los datos de los médicos
    this.medicosService.traerMedicos().subscribe(medicos => {
      console.log(medicos);
      this.medicos = medicos;
    });
    
    
    


}

}
