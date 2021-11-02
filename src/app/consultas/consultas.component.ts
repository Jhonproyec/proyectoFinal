import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConsultasService } from '../services/consultas/consultas.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {
  formularioConsultas: any;
  consultas: any;

  constructor(
    public fb: FormBuilder,
    public consultasService: ConsultasService,
  ) { }

  ngOnInit(): void {


    this.consultasService.traerConsultas()?.subscribe(async consultas => {
      this.consultas = await consultas;
  });
}

}
