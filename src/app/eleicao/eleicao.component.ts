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
  estadosApuracao: Array<DadosEleitorias>;

  constructor(
  ) { }

  ngOnInit(): void {
    console.log(this.data.results.NV[0].summary);

    this.estadosApuracao = dataFormater(estados, this.data.results);
    console.log(this.estadosApuracao);

  }


}
