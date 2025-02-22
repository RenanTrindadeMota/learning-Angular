import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Pessoa } from '../modelo/Pessoa';

@Component({
  selector: 'app-projeto1',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './projeto1.component.html',
  styleUrl: './projeto1.component.css'
})
export class Projeto1Component {
  
  // Objeto de formulário:
  formulario = new FormGroup({
    nome   : new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade  : new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    cidade : new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  // Visibilidade dos botôes:
  btnCadastrar:boolean = true;

  // Vetor:
  vetor:Pessoa[] = [];

  // Armazenar indice da pessoa selecionada:
  indice:number = -1;

  // Função de cadastro:
  cadastrar(){

    // Cadastro no vetor:
    this.vetor.push(this.formulario.value as Pessoa);

    // Limpeza dos inputs:
    this.formulario.reset();

    // Visualização via console:
    // console.table(this.vetor); serve para testar a função
  }

  // Função de seleção:
  selecionar(indice:number){
  this.indice = indice;

  // Atribuir os dados da pessoa no formulário:
  this.formulario.setValue({
  nome : this.vetor[indice].nome,
  idade : this.vetor[indice].idade,
  cidade : this.vetor[indice].cidade
  });

  // Visibilidade dos botôes:
  this.btnCadastrar = false;
  }

  // Função de alterção:
  alterar(){
    this.vetor[this.indice] = this.formulario.value as Pessoa;

    // Limpar os inputs:
    this.formulario.reset();

    /// Visibilidade dos botôes:
    this.btnCadastrar = true;
  }

  // Função de remoção:
  remover(){

    // Remover pessoa do vetor:
    this.vetor.splice(this.indice, 1);

    // Limpeza dos inputs:
    this.formulario.reset();

    // Visibilidade dos botôes:
    this.btnCadastrar = true;

  }

  // Função de cancelamento:
  cancelar(){

    // Limpeza dos inputs:
    this.formulario.reset();

    // Visibilidade dos botôes:
    this.btnCadastrar = true;
    
  }
}
