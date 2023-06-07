import { Component, OnInit } from '@angular/core';
import { Empresa } from '../empresa.model';
import { EmpresasService } from '../empresas.service';

@Component({
  selector: 'app-listado-empresas',
  templateUrl: './listado-empresas.component.html',
  styleUrls: ['./listado-empresas.component.css']
})
export class ListadoEmpresasComponent implements OnInit {

  empresas!: Empresa[];

  constructor(private empresaService:EmpresasService) {}


  ngOnInit(): void {
    this.empresas = this.empresaService.getEmpresa();
  }

}
