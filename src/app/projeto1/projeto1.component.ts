import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-projeto1',
  imports: [ReactiveFormsModule],
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
}
