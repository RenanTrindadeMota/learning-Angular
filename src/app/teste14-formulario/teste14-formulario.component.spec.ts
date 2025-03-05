import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teste14FormularioComponent } from './teste14-formulario.component';

describe('Teste14FormularioComponent', () => {
  let component: Teste14FormularioComponent;
  let fixture: ComponentFixture<Teste14FormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teste14FormularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teste14FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
