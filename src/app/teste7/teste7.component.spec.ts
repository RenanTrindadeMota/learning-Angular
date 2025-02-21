import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teste7Component } from './teste7.component';

describe('Teste7Component', () => {
  let component: Teste7Component;
  let fixture: ComponentFixture<Teste7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teste7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teste7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
