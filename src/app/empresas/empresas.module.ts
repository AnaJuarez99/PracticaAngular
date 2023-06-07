import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasService } from './empresas.service';
import { AltaEmpresaComponent } from './alta-empresa/alta-empresa.component';
import { FormsModule } from '@angular/forms';
import { ListadoEmpresasComponent } from './listado-empresas/listado-empresas.component';



@NgModule({
  declarations: [
    AltaEmpresaComponent,
    ListadoEmpresasComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    EmpresasService
  ],
  exports: [
    AltaEmpresaComponent,
    ListadoEmpresasComponent
  ]
})
export class EmpresasModule { }
