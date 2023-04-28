import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from 'backend/pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento : Pensamento = {
    id: 1,
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3',
    favorito: false
}


constructor(private pensamentoService: PensamentoService) { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  mudarIconeFavorito(){
    if(this.pensamento.favorito == true){
      return 'ativo'
    }else
    return 'inativo'
  }

  alterarFavorito(){
    this.pensamentoService.mudarFavorito(this.pensamento).subscribe(obj =>{
      console.log(obj)
    })
  }

}
