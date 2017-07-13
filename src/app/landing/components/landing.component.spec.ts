import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponent } from './landing.component';
import {FormBuilder} from "@angular/forms";

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    component = new LandingComponent(new FormBuilder());
    fixture.detectChanges();
  });


    it('should be created', () => {
        expect(component).toBeTruthy();
    });

  xit('should create toolbar and be rendered at the top', () => {
    //#TODO:write test code
  });

  xit('should have a link to navigate users to login page', () => {
      //#TODO:write test code

    });

  it('should create a form with 3 controls', () => {
     expect(component.form.contains('name')).toBeTruthy();
     expect(component.form.contains('email')).toBeTruthy();
     expect(component.form.contains('password')).toBeTruthy();
  });

  it('Name must be filled in order to submit', () => {
    let control = component.form.get('name');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

    it('Email must be filled in order to submit', () => {
        let control = component.form.get('email');
        control.setValue('');
        expect(control.valid).toBeFalsy();
    });


    it('Password must be filled in order to submit', () => {
        let control = component.form.get('password');
        control.setValue('');
        expect(control.valid).toBeFalsy();
    });

    it('Should raise a form submitted event on submit', () => {
       let formSubmitted = null;

       component.formSubmitted.subscribe(fs => formSubmitted = fs);

       component.submitForm();

       expect(component.form).toBeNull();
    });


});
