import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-teste7',
  imports: [CommonModule],
  templateUrl: './teste7.component.html',
  styleUrl: './teste7.component.css'
})
export class Teste7Component {

  // Variável lógica:
  condicao:boolean = true;

  // Lista de aprovados e reprovados:
  lista:string[] = ['Aprovado', 'Aprovado', 'Reprovado'];
}
