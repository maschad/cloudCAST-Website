/**
 * Created by carlos on 7/13/17.
 */


import {Injectable} from "@angular/core";
import {RequestOptions, Headers, Http} from "@angular/http";
import {Observable} from "rxjs";


@Injectable()
export class LandingService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({ headers: this.headers });
    private url = '...';

    constructor(private http:Http){}


    public signupUser(email:string,password:string): Observable<any> {
        return this.http.get(this.url).map(r => r.json())
    }
}