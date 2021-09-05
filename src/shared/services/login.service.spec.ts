import {getTestBed, TestBed, waitForAsync} from '@angular/core/testing';

import {LoginService} from './login.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export class MockLoginService {
  login(email: string, password: string): Observable<any> {
    return of({usuario: 'Jaidson'});
  }

  removeToken(): void {

  }

  setToken(token: string): void {

  }
}


describe('LoginService', () => {

  let injector: TestBed;
  let service: LoginService;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([]),],
      providers: [LoginService]
    }).compileComponents()
      .then(() => {
        injector = getTestBed();
        httpClient = injector.inject(HttpClient);
        httpMock = injector.inject(HttpTestingController);
        service = injector.inject(LoginService);
      });

  });

  it('should init service', () => {
    service = new LoginService(httpClient);
    expect(service).toBeTruthy();
  });

  it("should insert token in localStorage", () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
    service.setToken(token);
    expect(service.getToken()).toBe('Bearer ' + token);
  });


  it("should return getToken in localStorage", () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
    service.setToken(token);
    expect(service.getToken()).toBe('Bearer ' + token)
  });

  it("should removeToken in localStorage", () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
    service.setToken(token);
    expect(service.getToken()).toBe('Bearer ' + token);
    service.removeToken();
    expect(localStorage.getItem('accessToken')).toBeNull();
  });

  it("should insert user in localstorage", () => {
    const user = {
      id: 1,
      user: 'Jaidson'
    };
    service.setUser(user);
    expect(user).toEqual(jasmine.objectContaining(service.getUser()));
  });


  it('test should wait for ValueService.getObservableValue', waitForAsync(() => {
    spyOn(LoginService.prototype, 'login').and.callThrough();
    service.login('jaidsondantas@gmail.com', '123');
    expect(LoginService.prototype.login).toHaveBeenCalledWith('jaidsondantas@gmail.com', '123')
  }));
});
