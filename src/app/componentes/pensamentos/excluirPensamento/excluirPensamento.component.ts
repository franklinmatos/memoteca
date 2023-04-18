import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from 'backend/pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-excluirPensamento',
  templateUrl: './excluirPensamento.component.html',
  styleUrls: ['./excluirPensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
}

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
  })
  }

  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }

  excluirPensamento(){
    if(this.pensamento.id) {
      this.service.excluir(this.pensamento.id).subscribe(() => {
          this.router.navigate(['/listarPensamento'])
      })
  }
  }

}
