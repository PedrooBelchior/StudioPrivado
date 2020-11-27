import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCadastrarComponent } from './users-cadastrar.component';

describe('UsersCadastrarComponent', () => {
  let component: UsersCadastrarComponent;
  let fixture: ComponentFixture<UsersCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
