import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  setToken(token: string): void {
    localStorage.setItem('accessToken', token);
  }

  getToken(): string {
    return 'Bearer ' + localStorage.getItem('accessToken');
  }

  removeToken(): void {
    localStorage.removeItem('accessToken');
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${environment.urlApi}/auth/login`, {email, password});
  }

  setUser(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): any {
    return JSON.parse(<string>localStorage?.getItem('user'));
  }
}
