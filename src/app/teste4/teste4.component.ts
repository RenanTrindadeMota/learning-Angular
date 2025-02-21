import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-teste4',
  imports: [CommonModule],
  templateUrl: './teste4.component.html',
  styleUrl: './teste4.component.css'
})
export class Teste4Component {

  // Variável para exibir ou ocultar o quadrado
  exibir:boolean = true;

  // Função para exibir ou ocultar o quadrado:
  acao(){
    if(this.exibir === true){
      this.exibir = false;
    } else{
      this.exibir = true;
    }
  }
}
