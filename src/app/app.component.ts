import { Component, OnInit } from '@angular/core';
import { EleicaoComponent } from './eleicao/eleicao.component'
import axios from 'axios'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(){ }
  data = {
    sp: undefined, os:undefined
  };
  desabilitado = false;
  osasco = 'sp67890-c0011-e000426-r';
  sp = 'sp71072-c0011-e000426-r';
  cash = '';
  urnas = 0;
  ngOnInit(){

    (function() {
      var cors_api_host = 'cors-anywhere.herokuapp.com';
      var cors_api_url = 'https://' + cors_api_host + '/';
      var slice = [].slice;
      var origin = window.location.protocol + '//' + window.location.host;
      var open = XMLHttpRequest.prototype.open;
      XMLHttpRequest.prototype.open = function() {
          var args = slice.call(arguments);
          var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
          if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
              targetOrigin[1] !== cors_api_host) {
              args[1] = cors_api_url + args[1];
          }
          return open.apply(this, args);
      };
    })();


    this.getData(this.sp);
  }

  async getData(lk) {
    this.desabilitado = true;
    this.cash = lk;
    const res = await axios.get(`https://resultados.tse.jus.br/oficial/ele2020/divulgacao/oficial/426/dados-simplificados/sp/${lk}.json`);
    this.urnas = res.data.psi;
    this.data = res.data.cand;
    this.desabilitado = false;
  }

  alterna() {
    return this.cash === this.sp ? this.getData(this.osasco) : this.getData(this.sp);
  }

}



