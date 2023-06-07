import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaEmpresaComponent } from './empresas/alta-empresa/alta-empresa.component';
import { ListadoEmpresasComponent } from './empresas/listado-empresas/listado-empresas.component';

const routes: Routes = [
  {path: 'altaempresa', component: AltaEmpresaComponent},
  {path: 'listadoempresa', component: ListadoEmpresasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
