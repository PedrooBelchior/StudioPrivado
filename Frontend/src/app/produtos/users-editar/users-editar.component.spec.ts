import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersEditarComponent } from './users-editar.component';

describe('UsersEditarComponent', () => {
  let component: UsersEditarComponent;
  let fixture: ComponentFixture<UsersEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
