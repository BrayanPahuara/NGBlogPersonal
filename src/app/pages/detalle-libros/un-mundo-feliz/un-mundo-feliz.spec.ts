import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnMundoFeliz } from './un-mundo-feliz';

describe('UnMundoFeliz', () => {
  let component: UnMundoFeliz;
  let fixture: ComponentFixture<UnMundoFeliz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnMundoFeliz]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnMundoFeliz);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
