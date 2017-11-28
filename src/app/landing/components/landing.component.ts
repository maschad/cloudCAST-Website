import {Component, OnInit, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators, EmailValidator} from "@angular/forms";
import {LandingService} from "../services/landing.service";
import {
  MatButtonModule, MatCheckboxModule, MatMenuModule, MatInputModule, MatSnackBarModule,
       MatToolbarModule, MatDialogModule, MatSidenavModule, MatNativeDateModule,
       MatCardModule, MatTabsModule, MatIconModule
} from "@angular/material";
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
          name: ['', Validators.minLength(5)],
      });
  }

  ngOnInit() {
  }



  public submitForm(): void{

  }

  public signUp(): void {

  }

}
