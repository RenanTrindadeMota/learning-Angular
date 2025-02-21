import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teste10Component } from './teste10.component';

describe('Teste10Component', () => {
  let component: Teste10Component;
  let fixture: ComponentFixture<Teste10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teste10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teste10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
