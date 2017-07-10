import {Component, OnInit, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

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

      });
  }

  ngOnInit() {
  }



  submitForm(){

  }

}
