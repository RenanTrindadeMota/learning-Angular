import { Component } from '@angular/core';
import { Teste14FormularioComponent } from "../teste14-formulario/teste14-formulario.component";
import { Teste14TabelaComponent } from "../teste14-tabela/teste14-tabela.component";

@Component({
  selector: 'app-teste14',
  imports: [Teste14FormularioComponent, Teste14TabelaComponent],
  templateUrl: './teste14.component.html',
  styleUrl: './teste14.component.css'
})
export class Teste14Component {

  // Vetor:
  nomes:string[] = ['Ralf', 'Renan', 'Camilla', 'Fernando'];

  // Função para cadastrar nomes:
  cadastrar(nome:string) {
    this.nomes.push(nome);
  }

  
}
