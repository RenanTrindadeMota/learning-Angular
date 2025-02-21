import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-teste9',
  imports: [FormsModule],
  templateUrl: './teste9.component.html',
  styleUrl: './teste9.component.css'
})
export class Teste9Component {

  // Variável de nome
  nome:string = '';
  cidade:string = '';
}
