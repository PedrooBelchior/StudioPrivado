import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarCarrinhoComponent } from './validar-carrinho.component';

describe('ValidarCarrinhoComponent', () => {
  let component: ValidarCarrinhoComponent;
  let fixture: ComponentFixture<ValidarCarrinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidarCarrinhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
