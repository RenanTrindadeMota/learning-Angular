import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Teste1Component } from './teste1/teste1.component';
import { Teste2Component } from "./teste2/teste2.component";
import { Teste3Component } from "./teste3/teste3.component";
import { Teste4Component } from "./teste4/teste4.component";
import { Teste5Component } from "./teste5/teste5.component";
import { Teste6Component } from "./teste6/teste6.component";
import { Teste7Component } from "./teste7/teste7.component";
import { Teste8Component } from "./teste8/teste8.component";
import { Teste9Component } from "./teste9/teste9.component";
import { Teste10Component } from "./teste10/teste10.component";
import { Projeto1Component } from "./projeto1/projeto1.component";

@Component({
  selector: 'app-root',
  imports: [Projeto1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-basico';
}
