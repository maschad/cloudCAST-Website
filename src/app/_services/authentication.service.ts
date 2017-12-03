import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import * as myGlobals from '../_globals/global';
import {Router} from '@angular/router';
import {BehaviorSubject} from "rxjs/Rx";

@Injectable()
export class AuthenticationService {
        isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());

      /**
      *
      * @returns {Observable<T>}
      */
      isLoggedIn() : Observable<boolean> {
       return this.isLoginSubject.asObservable();
      }

        ngOnInit(){
            //it starts as false to check with the server if the user is authenticated
          }



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
                   this.isLoginSubject.next(true);
                }

                return user;
            });
    }



    logout() {
        if(localStorage.getItem("currentUser")!= null)
        {

          localStorage.removeItem('currentUser');
          this.isLoginSubject.next(false);
          this.router.navigateByUrl('/');

        }
        // remove user from local storage to log user out

    }

  /**
   * if we have token the user is loggedIn
   * @returns {boolean}
   */
  private hasToken() : boolean {
    return !!localStorage.getItem('currentUser');
  }





}
