import { PensamentoService } from './../pensamento.service';
import { Pensamento } from '../../../../../backend/pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  constructor(private pensamentoService: PensamentoService) { }

  ngOnInit(): void {
    this.pensamentoService.listar(this.paginaAtual)
      .subscribe( (dados) =>{
        this.listaPensamentos = dados;
      });

  }



}
