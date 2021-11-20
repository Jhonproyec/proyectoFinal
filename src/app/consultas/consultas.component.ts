import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Validator } from '@angular/forms';
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
  //traer informacion del formulario
  formularioConsultas: any;
  //Guardar las consultas
  consultas: any = [];
  //esta variable nos indica si el usuario va a agregar una nueva consulta o la va a editar
  editar: boolean = false;
  //Almacenar la posicion de la consulta
  indexArray: any;
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
    //validar el formulario
    this.formularioConsultas=this.fb.group({
      fecha:["", Validators.required],
      consultorio:["", Validators.required],
      medico: ["", Validators.required],
      paciente: ["", Validators.required],
      especialidad: ["", Validators.required],
      
    }) 
    //Verificamos si el localstoraje nos envia un null, la variable consultas sera un array vacio, de lo contrario almacenamos las consultas en el 
    if(localStorage.getItem('consultas') != null){
      this.consultas = [];
    }else{
      this.consultas.push(JSON.parse(localStorage.getItem('consultas')!));
    }

    //Aquí estoy obteniendo los datos de los médicos
    this.medicosService.traerMedicos().subscribe(medicos => {
      this.medicos = medicos;
    });

    //datos especialidades
    this.especialidadesService.traerEspecialidad().subscribe(especialidades => {
      this.especialidades = especialidades;
    });

    //datos pacientes
    this.pacientesService.traerPacientes().subscribe((paciente: any) => {
      console.log(paciente);
      this.pacientes = paciente;
    });
}
  //Esta funcion obtiene los datos del formulario, los guarda en la variable consultas y luego los almacena en el localstorage
  guardar(){
    this.consultas.push(this.formularioConsultas.value);
    localStorage.setItem('consultas', JSON.stringify(this.consultas));
    this.formularioConsultas.reset();
  }

  //Esta funcion recibe una consulta como parametro, luego con un for recorremos la variable consultas y cuando las consultas coincidan la borramos
  borrarConsulta(consulta:any){
    for(let i = 0; i < this.consultas.length; i++){
      if(consulta == this.consultas[i]){
        this.consultas.splice(i, 1);
        localStorage.setItem('consultas', JSON.stringify(this.consultas));
      }
    }
  }

  //En esta funcion obtenemos la información a editar y habilitamos la variable editar, para que el boton de la pantalla cambie de guardar a editar y así poder editar la información
  informacionEditar(consulta: any){
    this.editar = true;
    this.formularioConsultas.setValue({
      fecha: consulta.fecha,
      consultorio: consulta.consultorio,
      medico: consulta.medico,
      paciente: consulta.paciente,
      especialidad: consulta.especialidad,
    });
    //recorremos en la variable consultas para buscar una coincidencia entre la consulta que recibimos por parametro y las consultas que estan almacenadas en la variable consultas
    for(let i = 0; i < this.consultas.length; i++){
      if(consulta == this.consultas[i]){
        //guardamos la posicion donde se hizo la coincidencia
        this.indexArray = i;
      }
    }

  }
  //Esta funcion se encarga de editar la información, guardarla en el array de consultas, y editarla en el localstorage
  editarConsulta(){
    //en esta variable estamos guardando la consulta ya editada
    let consulta = this.formularioConsultas.value;
    //creamos un for para recorrer las consultas y para buscar cual era la consulta que se iba a editar
    //estamos buscando la coincidencia por el indice, ya que si queremos buscar la coincidencia por la consulta nos dará error, porque la consulta ya fue modificada
    for(let i = 0; i < this.consultas.length; i++){
      if(this.indexArray == i){
        //Cuando encuentre la coincidencia de la posicion reemplezamos la consulta antigua por la nueva
        this.consultas[i] = consulta;
      }
    }
    //Guardamos la informacion en el local storage
    localStorage.setItem('consultas', JSON.stringify(this.consultas));
    //deshabilitamos la opcion de editar, para que en el formulario aparezca el boton de guardar
    this.editar = false;
    //dejamos el formulario en blanco
    this.formularioConsultas.reset();
  }

}
