import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listaevento } from './listaevento';

describe('Listaevento', () => {
  let component: Listaevento;
  let fixture: ComponentFixture<Listaevento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listaevento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listaevento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
