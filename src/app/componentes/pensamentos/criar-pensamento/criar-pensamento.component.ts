import { Pensamento } from '../../../../../backend/pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 1,
    conteudo: 'Quem muito fala, da bom dia a cavalo.',
    modelo: 'modelo1',
    autoria: 'Desconhecido'
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento(){

  }

  cancelar(){


  }
}
