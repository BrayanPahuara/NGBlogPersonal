import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RebelionGranja } from './rebelion-granja';

describe('RebelionGranja', () => {
  let component: RebelionGranja;
  let fixture: ComponentFixture<RebelionGranja>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RebelionGranja]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RebelionGranja);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
