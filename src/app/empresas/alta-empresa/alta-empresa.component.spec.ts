import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaEmpresaComponent } from './alta-empresa.component';

describe('AltaEmpresaComponent', () => {
  let component: AltaEmpresaComponent;
  let fixture: ComponentFixture<AltaEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltaEmpresaComponent]
    });
    fixture = TestBed.createComponent(AltaEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
