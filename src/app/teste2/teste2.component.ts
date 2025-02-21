import { Component } from '@angular/core';

@Component({
  selector: 'app-teste2',
  imports: [],
  templateUrl: './teste2.component.html',
  styleUrl: './teste2.component.css'
})
export class Teste2Component {

  mensagem(){
    alert('Hello World');
  }
}
