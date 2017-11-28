import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import * as myGlobals from '../_globals/global';
import {Router} from '@angular/router';


@Injectable()
export class AuthenticationService {

     constructor(private http: Http,private router: Router) {
      }

     login(username: string, password: string) {
        return this.http.post(myGlobals.BASE_API_URL +'login', JSON.stringify({ name: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));

                }

                return user;
            });
    }



    logout() {
        if(localStorage.getItem("currentUser")!= null)
        {
          localStorage.removeItem('currentUser');
          //this.router.navigateByUrl('/');

        }
        // remove user from local storage to log user out

    }

    isloggedIn(){
      if (localStorage.getItem('currentUser')) {
          // logged in so return true
          return true;
      }
      else{
        return false;
      }

    }
}
