import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-teste6',
  imports: [CommonModule],
  templateUrl: './teste6.component.html',
  styleUrl: './teste6.component.css'
})
export class Teste6Component {

  // Variável contendo uma linguagem (HTML, CSS, JS)
  linguagem:string = 'JS';
}
