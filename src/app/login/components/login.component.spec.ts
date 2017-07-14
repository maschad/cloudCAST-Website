import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

    it('Username must be filled in order to submit', () => {
        let control = component.form.get('username');
        control.setValue('');
        expect(control.valid).toBeFalsy();
    });

    it('Password must be filled in order to submit', () => {
        let control = component.form.get('password');
        control.setValue('');
        expect(control.valid).toBeFalsy();
    });
});
