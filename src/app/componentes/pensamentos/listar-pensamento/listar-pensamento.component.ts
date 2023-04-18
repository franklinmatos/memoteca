import { Pensamento } from './../pensamento.entity';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      id: 1,
      conteudo: 'Quem muito fala, da bom dia a cavalo.',
      modelo: 'modelo1',
      autoria: 'Desconhecido'
    },
    {
      id: 2,
      conteudo: 'Quem com ferro fere, com ferro será ferido.',
      modelo: 'modelo2',
      autoria: 'Desconhecido'
    },
    {
      id: 3,
      conteudo: 'Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Diuretics paradis num copo é motivis de denguis. Atirei o pau no gatis, per gatis num morreus. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Sapien in monti palavris qui num significa nadis i pareci latim.',
      autoria: '',
      modelo: 'modelo3'
  },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
