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
  haMaisPensamentos: boolean = true;
  filtro: string = ""
  constructor(private pensamentoService: PensamentoService) { }

  ngOnInit(): void {
    this.pensamentoService.listar(this.paginaAtual, this.filtro)
      .subscribe( (dados) =>{
        this.listaPensamentos = dados;
      });

  }

  carregarMaisPensamentos(){
    this.pensamentoService.listar(++this.paginaAtual, this.filtro)
    .subscribe(listaPensamentos => {
      this.listaPensamentos.push(...listaPensamentos)
      if(!listaPensamentos.length){
        this.haMaisPensamentos = false
      }
    })
  }

  pesquisarPensamentos(){
    this.haMaisPensamentos = true
    this.paginaAtual = 1
      this.pensamentoService.listar(this.paginaAtual, this.filtro)
      .subscribe(listaPensamento => {
        this.listaPensamentos = listaPensamento
      })
  }

}
