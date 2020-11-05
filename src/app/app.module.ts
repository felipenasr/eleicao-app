import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EleicaoComponent } from './eleicao/eleicao.component';
import { EstadosComponent } from './eleicao/estados/estados.component';

@NgModule({
  declarations: [
    AppComponent,
    EleicaoComponent,
    EstadosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
