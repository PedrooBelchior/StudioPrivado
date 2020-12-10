import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosAccountComponent } from './pedidos-account.component';

describe('PedidosAccountComponent', () => {
  let component: PedidosAccountComponent;
  let fixture: ComponentFixture<PedidosAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
