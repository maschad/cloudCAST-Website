import {Component, OnInit, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {

    public form: FormGroup;
    public formSubmitted = new EventEmitter();

  constructor(fb: FormBuilder) {
      this.form = fb.group({
          name: fb.group({
              first: ['Nancy', Validators.minLength(2)],
              last: 'Drew',
          }),
          email: '',
      });
  }

  ngOnInit() {
  }



  submitForm(){

  }

}
