import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teste11Component } from './teste11.component';

describe('Teste11Component', () => {
  let component: Teste11Component;
  let fixture: ComponentFixture<Teste11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teste11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teste11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
