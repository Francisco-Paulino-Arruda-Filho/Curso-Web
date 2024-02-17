import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public precoGasolina: number = 0
  public precoAlcool: number = 0
  public resultado: String = ""
  constructor() {}

  public calcular(): void {
    if(this.precoGasolina && this.precoAlcool) {
      if(this.precoAlcool > this.precoGasolina) {
        this.resultado = "Melhor gasolina"
      } else if(this.precoAlcool < this.precoGasolina) {
        this.resultado = "Melhor álcool"
      } else {
        this.resultado = "Tanto faz"
      }
    } else 
        this.resultado = "Preencha corretamente os campos"
  }

  setGasolina(valor: number) {
    this.precoGasolina = valor
  }

  setAlcool(valor: number) {
    this.precoAlcool = valor
  }
}
