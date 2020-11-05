import { Component, Input, OnInit } from '@angular/core';
import { DadosEleitorias } from '../helper';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})
export class EstadosComponent implements OnInit {
  @Input() estado: DadosEleitorias;
  @Input() index: number;
  constructor() { }

  ngOnInit(): void {
  }

}
