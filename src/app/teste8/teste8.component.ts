import { Component } from '@angular/core';

@Component({
  selector: 'app-teste8',
  imports: [],
  templateUrl: './teste8.component.html',
  styleUrl: './teste8.component.css'
})
export class Teste8Component {

  // Variável de média:
  media:number = 7;

  // Vetor de nomes:
  nomes:string[] = ['Renan', 'Camilla', 'Julio', 'Danilo'];

  linguagem:string = 'HTML';
}
