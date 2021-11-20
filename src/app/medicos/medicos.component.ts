import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { MedicosService } from '../services/medicos/medicos.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css'] 
})
export class MedicosComponent implements OnInit {

  formularioMedico: FormGroup;
  medicos: any;

  constructor(
    public fb: FormBuilder,
    public medicosService: MedicosService,
  ) { }

  ngOnInit(): void {
    this.formularioMedico = this.fb.group({
      idMedico:        [''],
      cmp:       ['', Validators.required],
      nombres:   ['', Validators.required],
      apellidos: ['', Validators.required],
    })

    this.medicosService.traerMedicos()?.subscribe(async medicos => {
      this.medicos = await medicos;
    });
  }
  
  guardar(): void{
    console.log(this.formularioMedico.value);
    this.medicosService.guardarMedico(this.formularioMedico.value).subscribe(resp => {
      this.formularioMedico.reset();      
      this.medicos.push(resp);
      window.location.reload();
    },
      error => {console.error(error)}
    )
  }

  eliminar(medico:any){
    this.medicosService.borrarMedico(medico.idMedico).subscribe(resp => {
        this.medicos.pop(medico);
        window.location.reload();
    })
  }
  editar(medico:any){
    this.formularioMedico.setValue({
      idMedico: medico.idMedico,
      cmp: medico.cmp,
      nombres: medico.nombres,
      apellidos: medico.apellidos,
    })
  }

}


