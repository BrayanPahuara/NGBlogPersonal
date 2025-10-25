import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElExtranjero } from './el-extranjero';

describe('ElExtranjero', () => {
  let component: ElExtranjero;
  let fixture: ComponentFixture<ElExtranjero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElExtranjero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElExtranjero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
