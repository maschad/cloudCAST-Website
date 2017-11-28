import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
 import { User } from '../_models/user';
 import * as myGlobals from '../_globals/global';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

   getAll() {
       return this.http.get(myGlobals.BASE_API_URL + 'users', this.jwt()).map((response: Response) => response.json());
   }

   getLoggedInUser() {
       return this.http.get(myGlobals.BASE_API_URL + 'user/', this.jwt()).map((response: Response) => response.json());
   }

   getByUID(uid: string) {
       return this.http.get(myGlobals.BASE_API_URL + 'user/' + uid, this.jwt()).map((response: Response) => response.json());
   }

   create(user: User) {
       return this.http.post(myGlobals.BASE_API_URL + 'users', user, this.jwt()).map((response: Response) => response.json());
   }

   update(user: User, uid:string) {
       return this.http.put(myGlobals.BASE_API_URL + 'user/' + user.name, user, this.jwt()).map((response: Response) => response.json());
   }

   delete(uid: string) {
       return this.http.delete(myGlobals.BASE_API_URL + 'user/' + uid, this.jwt()).map((response: Response) => response.json());
   }

   // private helper methods

   private jwt() {
       // create authorization header with jwt token
       let currentUser = JSON.parse(localStorage.getItem('currentUser'));

       if (currentUser && currentUser.token) {
         let headers = new Headers();
         headers.append('Access-Control-Allow-Origin','*');
         headers.append('Authorization' , 'Bearer'+ currentUser.token);
         return new RequestOptions({ headers: headers });
       }
       else{
        // let headers = new Headers();
         //headers.append('Content-Type', 'application/json');
         //headers.append('Access-Control-Allow-Origin','*');
         //return new RequestOptions({ headers: headers });
       }
   }

}
