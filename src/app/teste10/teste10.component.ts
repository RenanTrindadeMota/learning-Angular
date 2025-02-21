import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-teste10',
  imports: [ReactiveFormsModule],
  templateUrl: './teste10.component.html',
  styleUrl: './teste10.component.css'
})
export class Teste10Component {

  formulario = new FormGroup({
    nome : new FormControl(''),
    cidade : new FormControl('')
  });
}
