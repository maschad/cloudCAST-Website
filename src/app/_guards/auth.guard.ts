import { Injectable } from '@angular/core';
import { Router ,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AlertService} from '../_services/alert.service';
import {AuthenticationService} from "../_services/authentication.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService:AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     return this.authService.isLoggedIn().map(isAuth => {
       console.log('is authenticated',isAuth);
            if (isAuth) {
                return true;
            }else{
                this.router.navigate(['/login']);
                return false;
            }
        });
    }
}
