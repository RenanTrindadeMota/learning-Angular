import { Component } from '@angular/core';

@Component({
  selector: 'app-teste3',
  imports: [],
  templateUrl: './teste3.component.html',
  styleUrl: './teste3.component.css'
})
export class Teste3Component {

  // Variável de Imagem:
  imagem:string = '/praia-teste.jpg'

  // Função para trocar a imagem:
  alterarImagem() {
    if(this.imagem === '/praia-teste.jpg'){
      this.imagem = '/inverno-teste.jpg'
    } else{
      this.imagem = '/praia-teste.jpg'
    }
  }
}
