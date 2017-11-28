import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class LoginRedirect implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    if (localStorage.getItem('currentUser')) {
      this.router.navigateByUrl('/dashboard');
      return false;
    }
    else {
      return true;
    }
  }
}
