import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from 'backend/pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-editarPensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {


  id: string = '';
  formulario!: FormGroup;

  pensamento!: Pensamento;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.criarFormulario()

    this.service.buscarPorId(parseInt(this.getId())).subscribe((pensamento) => {

        this.formulario.get('conteudo')?.setValue(pensamento.conteudo)
        this.formulario.get('autoria')?.setValue(pensamento.autoria)
        this.formulario.get('id')?.setValue(pensamento.id)
        this.formulario.get('modelo')?.setValue(pensamento.modelo)
        this.formulario.get('favorito')?.setValue(pensamento.favorito)
        console.log('formulario Edit =>> ',this.formulario)
    })
  }

  editarPensamento() {
    this.updatePensamento(this.formulario)
    this.service.editar(this.pensamento).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
    })
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }

  criarFormulario(){
    this.formulario = this.formBuilder.group({
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/), ]
        )],
      autoria:['' , Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ]
        )],
      modelo: ['modelo3' ],
      favorito: false
    })
    this.formulario.get('conteudo')?.errors
  }

  updatePensamento(formulario: FormGroup){
    this.pensamento = {
      conteudo: '',
      autoria: '',
      modelo: '',
      favorito: false
    }
    this.pensamento.autoria = formulario.get('autoria')?.value
    this.pensamento.conteudo = formulario.get('conteudo')?.value
    this.pensamento.modelo = formulario.get('modelo')?.value
    this.pensamento.id = Number(this.getId())
  }

  getId(): string{
    return this.route.snapshot.paramMap.get('id') || ''

  }

  habilitarBotao(): string{
    if(this.formulario.valid){
      return "botao"
    }else
    return "botao__desabilitado"
  }

}
