import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthAppRegistration } from './auth-app-registration';

describe('AuthAppRegistration', () => {
  let component: AuthAppRegistration;
  let fixture: ComponentFixture<AuthAppRegistration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthAppRegistration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthAppRegistration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
