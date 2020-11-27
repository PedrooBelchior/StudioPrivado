import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoquistaEditarComponent } from './estoquista-editar.component';

describe('EstoquistaEditarComponent', () => {
  let component: EstoquistaEditarComponent;
  let fixture: ComponentFixture<EstoquistaEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstoquistaEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstoquistaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
