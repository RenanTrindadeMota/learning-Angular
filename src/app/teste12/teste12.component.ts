import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../modelo/Produto';
import { ProdutoService } from '../services/produto.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-teste12',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './teste12.component.html',
  styleUrl: './teste12.component.css'
})
export class Teste12Component {

  // Vetor - armazena todos os produtos provenientes da nossa api
  vetor:Produto[] = [];

  // Visibilidade dos botões:
  btnCadastrar:boolean = true;

  // Objeto de formulário:
  formulario = new FormGroup({
    id:    new FormControl(null),
    nome:  new FormControl(''),
    valor: new FormControl(null)
  });

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

  // Método para cadastrar produtos:
  cadastrar(){
    this.services.cadastrar(this.formulario.value as Produto)
    .subscribe(retorno => {

      this.vetor.push(retorno);

      this.formulario.reset();

    })
  }

  // Método para selecionar um produto específico
  selecionarProduto(indice:number){

    this.formulario.setValue({
      id : this.vetor[indice].id,
      nome: this.vetor[indice].nome,
      valor: this.vetor[indice].valor
    });

    this.btnCadastrar = false;
  }

  // Método para alterar produtos
  alterar(){
    this.services.alterar(this.formulario.value as Produto)
    .subscribe(retorno => {

      // Obter o indice do objeto alterado
      let indiceAlterado = this.vetor.findIndex(obj => {
        return this.formulario.value.id === obj.id;
      });

      // Alterar o vetor:
      this.vetor[indiceAlterado] = retorno;

      // Limpar o formulário:
      this.formulario.reset();

      // Visibilidade dos botões:
      this.btnCadastrar = true;

    })
  }

  // Método para remover produtos
  remover(){

    this.services.remover(this.formulario.value.id)
    .subscribe(() => {

      // Obter o indice do vetor que foi removido
      let indiceRemovido = this.vetor.findIndex(obj => {
        return obj.id === this.formulario.value.id
      });

      // Remover objeto do vetor:
      this.vetor.splice(indiceRemovido, 1);

      // Limpar o formulário:
      this.formulario.reset();
      
      // Visibilidade dos botões:
      this.btnCadastrar = true;
    });
  }
}

// Desafios:
// 1º Implemente uma filtragem através do nome do produto. Ao digitar, selecione apenas os produtos que contenham determinado termo.
// 2º Não deixe cadastrar produtos de mesmo nome.
// 3º Ocultar o campo que exibe o id.
