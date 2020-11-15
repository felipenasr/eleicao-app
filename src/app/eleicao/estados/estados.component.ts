import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html'
})
export class EstadosComponent implements OnInit {
  @Input() estado: any;
  constructor() { }

  ngOnInit(): void {
  }

}
