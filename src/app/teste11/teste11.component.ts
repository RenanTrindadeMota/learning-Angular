import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MediaPipe } from "../pipe/media.pipe";

@Component({
  selector: 'app-teste11',
  imports: [CommonModule, MediaPipe],
  templateUrl: './teste11.component.html',
  styleUrl: './teste11.component.css'
})
export class Teste11Component {

  // Texto:
  nome:string = 'Renan';

  // Objeto:
  obj:any = {'nome':'Renan', 'idade':34};

  // Vetor de objetos
 alunos:any = [
  {'nome':'Ana',     'nota1':8, 'nota2':9},
  {'nome':'Julio',   'nota1':7, 'nota2':8},
  {'nome':'Letícia', 'nota1':3, 'nota2':2},
  {'nome':'Ricardo', 'nota1':7, 'nota2':7}
];

}
