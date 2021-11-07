import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PacientesService } from '../services/pacientes/pacientes.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  pacienteForm: FormGroup;
  pacientes: any;

  constructor(
    public fbp: FormBuilder,
    public pacientesService: PacientesService
    ) {

  }

  ngOnInit(): void {
    this.pacienteForm = this.fbp.group({
      idPaciente: [''],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      dni: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
    })

    this.pacientesService.traerPacientes().subscribe(resp=>{
      this.pacientes = resp;
      this.pacientes.push(resp);
    },
      error=>{ console.error(error)}
    );

  }

  guardar(): void{
    console.log(this.pacienteForm.value)
    this.pacientesService.registrar(this.pacienteForm.value).subscribe(resp=>{
      this.pacienteForm.reset();
    },
    error=>{ console.error(error)}
    )
  }

  eliminar(paciente:any){
    this.pacientesService.borrarPaciente(paciente.idPaciente).subscribe(resp=>{
      this.pacientes.pop(paciente);
      },
      error=>{ console.error(error)}
    )
  }

  editar(paciente:any){
    this.pacienteForm.setValue({
      idPaciente: paciente.idPaciente,
      nombres: paciente.nombres,
      apellidos: paciente.apellidos,
      dni: paciente.dni,
      direccion:  paciente.direccion,
      telefono: paciente.telefono,
      email:  paciente.email,
    })
  }

}
