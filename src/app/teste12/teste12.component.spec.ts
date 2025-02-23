import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teste12Component } from './teste12.component';

describe('Teste12Component', () => {
  let component: Teste12Component;
  let fixture: ComponentFixture<Teste12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teste12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teste12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
