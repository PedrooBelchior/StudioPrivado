import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhePedidoAccountComponent } from './detalhe-pedido-account.component';

describe('DetalhePedidoAccountComponent', () => {
  let component: DetalhePedidoAccountComponent;
  let fixture: ComponentFixture<DetalhePedidoAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhePedidoAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhePedidoAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
