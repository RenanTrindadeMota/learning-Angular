import { Component } from '@angular/core';

@Component({
  selector: 'app-teste16',
  imports: [],
  templateUrl: './teste16.component.html',
  styleUrl: './teste16.component.css'
})
export class Teste16Component {

  // Variável nome:
  nome:string = 'Renan';

  // Variável média:
  media:number = 0;

  // Função para calcular a média:
  calculo(n1:number, n2:number){
    return (n1+n2)/2;
  }
}
