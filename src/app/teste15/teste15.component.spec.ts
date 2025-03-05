import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teste15Component } from './teste15.component';

describe('Teste15Component', () => {
  let component: Teste15Component;
  let fixture: ComponentFixture<Teste15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teste15Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teste15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
