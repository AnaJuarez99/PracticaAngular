import { Injectable } from '@angular/core';
import { Empresa } from './empresa.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  private empresas: Empresa[];

  constructor() { 
    this.empresas = [];
  }

  getEmpresa(){
    return this.empresas;
  }
  setEmpresa(empresa: Empresa){
    this.empresas.push(empresa);
  }

  nuevaEmpresa(): Empresa{
    return{
      id: this.empresas.length,
      nombre: '',
      descripcion: '',
      website: ''
    }

  }
}
