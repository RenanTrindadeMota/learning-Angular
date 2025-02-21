import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teste6Component } from './teste6.component';

describe('Teste6Component', () => {
  let component: Teste6Component;
  let fixture: ComponentFixture<Teste6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teste6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teste6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
