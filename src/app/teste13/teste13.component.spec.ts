import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teste13Component } from './teste13.component';

describe('Teste13Component', () => {
  let component: Teste13Component;
  let fixture: ComponentFixture<Teste13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teste13Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teste13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
