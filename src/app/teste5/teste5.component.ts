import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-teste5',
  imports: [CommonModule],
  templateUrl: './teste5.component.html',
  styleUrl: './teste5.component.css'
})
export class Teste5Component {
  // Vetor de nomes:
  nomes:string[] = ['Renan', 'Guilherme', 'João'];
}
