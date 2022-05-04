import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './features/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  token = localStorage.getItem('token');
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const appUser = this.authService.decode(this.token!);
    if(appUser){
      var role = appUser['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    }
    if (this.token && role == route.data['role']) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
  

}
