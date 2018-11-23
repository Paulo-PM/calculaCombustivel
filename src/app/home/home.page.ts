import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public gasolina:string;
  public etanol: string;
  public calculo: string;
  public resultado: number;


  calculoCombustivel(){
    let alcool = parseFloat(this.etanol);
    let gas = parseFloat(this.gasolina);
    this.resultado = alcool/gas;

    if(this.resultado <0.7){
      this.calculo = "Etanol é Melhor";
    }
    else{
      this.calculo ="Gasolina é Melhor";
    }

  }
}
