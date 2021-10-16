import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MedicosComponent } from './medicos/medicos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'medicos',
    component: MedicosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
