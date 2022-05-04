import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '@environments/environment';
import { Observable, retry } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from './types/User';
import { Auth } from './types/Auth';
import { Role } from './types/Role';
const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token!: any;

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }


  login(data: User): Observable<any> {
    return this.http.post<any>(`${environment.BASE_URL}/auth/login`, data)
      .pipe(
        retry(3)
      );
  }

  signup(data: any): Observable<any> {
    return this.http.post<any>(`${environment.BASE_URL}/auth/register`, data)
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  setUser(response: Auth) {

    localStorage.setItem('token', response.token);
    const appUser = this.decode(response.token);
    const role = appUser['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    if (role == Role.User) {
      this.router.navigate(['/user'])
      } else {
        this.router.navigate(['/admin'])
    };
  }


  decode(token: string) {
    return helper.decodeToken(token);
  }



   
    
}
