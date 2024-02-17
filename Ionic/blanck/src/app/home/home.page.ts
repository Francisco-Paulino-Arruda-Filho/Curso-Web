import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public resultado: String = ""
  public titulo: String = "Minha string"
  public imagemRandomica: String = "https://pin.it/7aJQO9uIe"
  constructor(private navegacao: NavController) {}

  public mudar(): void {
    this.titulo = "Meu app"
  }

  public recuperar(): void {
    
  }

  public abrirBotoes(): void {
    this.navegacao.navigateForward('botoes')
  }

  public abrirInput(): void {
    this.navegacao.navigateForward('input')
  }
}