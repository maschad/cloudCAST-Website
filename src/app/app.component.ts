import { Component} from '@angular/core';
import {trigger, transition, animate, style} from "@angular/animations";
import {AuthenticationService} from './_services/authentication.service';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
      trigger('searchState', [
          transition(':leave', [
              style({transform: 'translateX(-100%)'}),
              animate(1)
          ]),
          transition(':enter', [
              style({transform: 'translateX(100%)'}),
              animate(200)
          ])
      ])
  ],

})
export class AppComponent {
  loggedIn = false;
    title:string = 'Cloudcast';
   showSearchBar:boolean = false;

   constructor(private auth: AuthenticationService) {
    this.loggedIn = this.auth.isloggedIn();
  }

  logout(){
    console.log("log");
    this.auth.logout();
  }

  private showSearch(): void {
        this.showSearchBar = !this.showSearchBar;
}

authenticateUser(): Observable<boolean>{
  if(this.loggedIn=== false)
  {
    return Observable.of(false);
  }
  let temp = this.auth.isloggedIn();
  if(temp == true)
  {
    this.loggedIn = true;
    return Observable.of(true);
  }
  else if(temp == false){
    this.loggedIn = false;
      return Observable.of(false);
  }
  }






}
