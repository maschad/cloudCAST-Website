import {Component, OnInit, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LandingService} from "../services/landing.service";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {

    public form: FormGroup;
    public formSubmitted = new EventEmitter();

  constructor(private fb: FormBuilder, private landingService:LandingService) {
      this.form = fb.group({
          name: fb.group({
              first: ['', Validators.minLength(5)],
              last: ['', Validators.minLength(5)]
          }),
          email: '',
      });
  }

  ngOnInit() {
  }



  public submitForm(): void{

  }

  public signUp(): void {

  }

}
