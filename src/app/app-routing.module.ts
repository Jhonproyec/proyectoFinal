import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MedicosComponent } from './medicos/medicos.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { PacientesComponent } from './pacientes/pacientes.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'medicos',
    component: MedicosComponent
  },
  {
    path: 'consultas',
    component: ConsultasComponent
  },
  {
    path: 'especialidades',
    component: EspecialidadesComponent
  },
  {
    path: 'pacientes',
    component: PacientesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
