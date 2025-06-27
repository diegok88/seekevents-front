import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cadeve } from './cadeve';

describe('Cadeve', () => {
  let component: Cadeve;
  let fixture: ComponentFixture<Cadeve>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cadeve]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cadeve);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
