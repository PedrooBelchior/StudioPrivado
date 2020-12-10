import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoquistaPedidosComponent } from './estoquista-pedidos.component';

describe('EstoquistaPedidosComponent', () => {
  let component: EstoquistaPedidosComponent;
  let fixture: ComponentFixture<EstoquistaPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstoquistaPedidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstoquistaPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
