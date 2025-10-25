import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimenCastigo } from './crimen-castigo';

describe('CrimenCastigo', () => {
  let component: CrimenCastigo;
  let fixture: ComponentFixture<CrimenCastigo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrimenCastigo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrimenCastigo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
