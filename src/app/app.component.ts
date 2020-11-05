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
  data;
  desabilitado = false;
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


    this.getData();
  }

  async getData() {
    this.desabilitado = true;
    const res = await axios.get('https://interactives.ap.org/elections/live-data/production/2020-11-03/president/summary.json');
    this.data = res.data;
    this.desabilitado = false;
  }

}



