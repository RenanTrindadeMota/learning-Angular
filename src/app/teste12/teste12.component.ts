import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../modelo/Produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-teste12',
  imports: [CommonModule],
  templateUrl: './teste12.component.html',
  styleUrl: './teste12.component.css'
})
export class Teste12Component {

  // Vetor - armazena todos os produtos provenientes da nossa api
  vetor:Produto[] = [];

  // Construtor
  constructor(private services:ProdutoService){}

  // Inicialização do componente:
  ngOnInit(){
    this.selecionar();
  }
  // Método para selecionar todos os produtos:
  selecionar(){
    this.services.selecionar().subscribe(retorno => {this.vetor = retorno});
  }
}
