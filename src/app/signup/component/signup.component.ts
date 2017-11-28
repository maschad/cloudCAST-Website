import { Component, OnInit, Inject } from '@angular/core';
import {AuthenticationService} from "../../_services/authentication.service";
import {AlertService} from "../../_services/alert.service";
import {UserService} from "../../_services/user.service";
import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model: any = {};
  loading = false;
  public form: FormGroup;

  constructor(
         private router: Router,
         private userService: UserService,
         private alertService: AlertService,
         @Inject(FormBuilder) private fb: FormBuilder) {

           this.form = this.fb.group({
             name: ['', Validators.required ],
            password: ['', Validators.required ],
             first_name: '',
             last_name: '',
             retype_password:'',
             email_address:'',


           });
         }

     register() {

         this.loading = true;
         this.userService.create(this.model)
             .subscribe(
                 data => {
                    console.log("worked");
                     // set success message and pass true paramater to persist the message after redirecting to the login page
                     this.alertService.success('Registration successful', true);
                     this.router.navigate(['/login']);
                 },
                 error => {
                     this.alertService.error(error);
                     this.loading = false;
                 });

     }

  ngOnInit() {
  }

}
