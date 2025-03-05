import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teste14Component } from './teste14.component';

describe('Teste14Component', () => {
  let component: Teste14Component;
  let fixture: ComponentFixture<Teste14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teste14Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teste14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
