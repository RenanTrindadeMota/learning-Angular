import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teste9Component } from './teste9.component';

describe('Teste9Component', () => {
  let component: Teste9Component;
  let fixture: ComponentFixture<Teste9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teste9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teste9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
