import { Component, OnInit, Input } from '@angular/core';
import { estados } from "./constantes"
import { dataFormater, DadosEleitorias } from "./helper"
import { EstadosComponent } from './estados/estados.component'

@Component({
  selector: 'app-eleicao',
  templateUrl: './eleicao.component.html',
  styleUrls: ['./eleicao.component.css']
})
export class EleicaoComponent implements OnInit {
  @Input() data : any;
  estadosApuracao: Array<any>;

  constructor(
  ) { }

  ngOnInit(): void {
    this.estadosApuracao = dataFormater(this.data);
    console.log(this.estadosApuracao);
    this.estadosApuracao.sort((a,b) => {
      return a.posicao - b.posicao;
    })
  }


}
