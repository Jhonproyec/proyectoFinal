import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicosComponent } from './medicos/medicos.component';
import { HomeComponent } from './home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ConsultasComponent } from './consultas/consultas.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { PacientesComponent } from './pacientes/pacientes.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    HomeComponent,
    ConsultasComponent,
    EspecialidadesComponent,
    PacientesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
