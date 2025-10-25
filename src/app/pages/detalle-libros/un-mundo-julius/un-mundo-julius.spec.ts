import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnMundoJulius } from './un-mundo-julius';

describe('UnMundoJulius', () => {
  let component: UnMundoJulius;
  let fixture: ComponentFixture<UnMundoJulius>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnMundoJulius]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnMundoJulius);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
