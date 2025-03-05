import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-teste14-tabela',
  imports: [CommonModule],
  templateUrl: './teste14-tabela.component.html',
  styleUrl: './teste14-tabela.component.css'
})
export class Teste14TabelaComponent {

  @Input() vetor:string[] = [];
}
