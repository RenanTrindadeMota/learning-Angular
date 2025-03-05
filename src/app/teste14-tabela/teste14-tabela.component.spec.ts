import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teste14TabelaComponent } from './teste14-tabela.component';

describe('Teste14TabelaComponent', () => {
  let component: Teste14TabelaComponent;
  let fixture: ComponentFixture<Teste14TabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teste14TabelaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teste14TabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
