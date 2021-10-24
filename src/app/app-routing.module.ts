import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MedicosComponent } from './medicos/medicos.component';
import { ConsultasComponent } from './consultas/consultas.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
