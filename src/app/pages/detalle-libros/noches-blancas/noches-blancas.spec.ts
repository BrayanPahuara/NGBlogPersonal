import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NochesBlancas } from './noches-blancas';

describe('NochesBlancas', () => {
  let component: NochesBlancas;
  let fixture: ComponentFixture<NochesBlancas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NochesBlancas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NochesBlancas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
