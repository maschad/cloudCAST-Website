import { Component, OnInit} from '@angular/core';
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
export class AppComponent implements OnInit{
  isLoggedIn : Observable<boolean>;

    title:string = 'Cloudcast';
  public showSearchBar:boolean = false;

   constructor(private auth: AuthenticationService) {
       this.isLoggedIn = this.auth.isLoggedIn();
  }
  ngOnInit() {
    console.log("user logged in ", this.isLoggedIn)
  }

  logout(){
    console.log("log");
    this.auth.logout();
  }

  public showSearch(): void {
        this.showSearchBar = !this.showSearchBar;
}









}
