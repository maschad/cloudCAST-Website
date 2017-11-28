import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import * as myGlobals from '../_globals/global';
 import { Application } from '../_models/application';



@Injectable()
export class ApplicationsService {

  constructor(private http: Http) {
   }

   getAll(uid:string) {
       return this.http.get(myGlobals.BASE_API_URL + 'user/' + uid + '/apps?perpage=10&page=1').map((response: Response) => response.json());
   }

   create(uid:string ,application: Application) {
       return this.http.post(myGlobals.BASE_API_URL + 'user/' +  uid + '/apps', application).map((response: Response) => response.json());
   }


}
