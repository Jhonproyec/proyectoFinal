import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConsultasService } from '../services/consultas/consultas.service';
import { especialidadesService } from '../services/especialidades/especialidades.service';
import { MedicosService } from '../services/medicos/medicos.service';
import { PacientesService } from '../services/pacientes/pacientes.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {
  [x: string]: any;
  formularioConsultas: any;
  consultas: any;

  //En esta variable voy a guardar los datos de los medicos, para mostrarlas en los options del html
  medicos: any;
  especialidades: any;
  pacientes: any;

  constructor(
    public fb: FormBuilder,
    public consultasService: ConsultasService,
    //Aquí se está llamando al servicio de medicos
    public medicosService: MedicosService,
    public especialidadesService: especialidadesService,
    public pacientesService: PacientesService,
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

    //datos especialidades
    this.especialidadesService.traerEspecialidad().subscribe(especialidades => {
      console.log(especialidades);
      this.especialidades = especialidades;
    });

    //datos pacientes
    this.pacientesService.traerPacientes().subscribe((paciente: any) => {
      console.log(paciente);
      this.pacientes = paciente;
    });
}

}
