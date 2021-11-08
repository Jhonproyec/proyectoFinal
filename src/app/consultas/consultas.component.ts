import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConsultasService } from '../services/consultas/consultas.service';
import { EspecialidadesService } from '../services/especialidades.service';
import { MedicosService } from '../services/medicos/medicos.service';
import { PacientesService } from '../services/pacientes/pacientes.service';

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
  especialidadesService: any;
  especialidades: any;
  PacientesService: any;
  pacientes: any;

  constructor(
    public fb: FormBuilder,
    public consultasService: ConsultasService,
    //Aquí se está llamando al servicio de medicos
    public medicosService: MedicosService,
    public EspecialidadesService: EspecialidadesService,
    public PacienteService: PacientesService,
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
    this.especialidadesService.traerEspecialidad().subscribe((especialidades: any) => {
      console.log(especialidades);
      this.especialidades = especialidades;

    });
    //datos pacientes
    this.PacientesService.traerPaciente().subscribe((pacientes: any) => {
      console.log(pacientes);
      this.pacientes = pacientes;
    });

}

}
