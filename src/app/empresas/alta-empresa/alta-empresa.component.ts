import { Component, OnInit } from '@angular/core';
import { Empresa } from '../empresa.model';
import { EmpresasService } from '../empresas.service';

@Component({
  selector: 'app-alta-empresa',
  templateUrl: './alta-empresa.component.html',
  styleUrls: ['./alta-empresa.component.css']
})
export class AltaEmpresaComponent implements OnInit {

  constructor(private empresasService: EmpresasService){}
  empresa!: Empresa;

  nuevaEmpresa(): void {
    this.empresasService.setEmpresa(this.empresa);
    this.empresa = this.empresasService.nuevaEmpresa();
  }
  ngOnInit(): void{
    this.empresa = this.empresasService.nuevaEmpresa();
  }

}
