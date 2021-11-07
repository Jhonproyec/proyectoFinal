import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { especialidadesService } from '../services/especialidades/especialidades.service';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css']
})
export class especialidadesComponent implements OnInit {

  formularioespecialidades: FormGroup;
  especialidades: any;

  constructor(
    public fb: FormBuilder,
    public especialidadesService: especialidadesService,
  ) { }

  ngOnInit(): void {
    this.formularioespecialidades = this.fb.group({
      idEspecialidad:        [''],
      nombre: ['', Validators.required],
    })

    this.especialidadesService.traerEspecialidad().subscribe(resp => {
      this.especialidades = resp;
    });
  }
  
  guardar(): void{
    console.log(this.formularioespecialidades.value);
    this.especialidadesService.guardarEspecialidad(this.formularioespecialidades.value).subscribe(resp => {
      this.formularioespecialidades.reset();      
      this.especialidades.push(resp);
    },
      error => {console.error(error)}
    )
  }

  eliminar(especialidades:any){
    this.especialidadesService.borrarEspecialidad(especialidades.idEspecialidad).subscribe(resp => {
        this.especialidades.pop(especialidades);
    })
  }
  editar(especialidades:any){
    this.formularioespecialidades.setValue({
      idEspecialidad: especialidades.idEspecialidad,
      nombre: especialidades.nombre,
    })
  }
}