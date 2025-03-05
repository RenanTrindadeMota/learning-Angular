import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-teste14-formulario',
  imports: [FormsModule],
  templateUrl: './teste14-formulario.component.html',
  styleUrl: './teste14-formulario.component.css'
})
export class Teste14FormularioComponent {

  // Variável para armazenar o nome informado:
  nome:string = '';

  // Output:
  @Output() funcao = new EventEmitter<string>();

  // Função de cadastro do componente de formulario:
  cadastrarNome(){
    this.funcao.emit(this.nome);
  }
}
