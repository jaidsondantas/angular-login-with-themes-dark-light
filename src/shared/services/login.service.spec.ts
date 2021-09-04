import {getTestBed, TestBed} from '@angular/core/testing';

import {LoginService} from './login.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export class MockLoginService {
  login(email: string, password: string): Observable<any> {
    return new Observable<any>();
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
    spyOn(service, 'setToken');
    service.setToken(token);
    service.setToken(token);
    service.setToken(token);
    expect(service.setToken).toHaveBeenCalledTimes(3);
    expect(localStorage.getItem('accessToken')).toEqual(token);
  })
  //
  // it("should return getToken in localStorage", () => {
  //   const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
  //   spyOn(service, 'getToken').and.returnValue(token);
  //
  //   service.setToken(token);
  //
  //   const tokenLocal = service.getToken();
  //   expect(service.getToken()).toEqual(token)
  // })
  //
  // it("should insert removeToken in localStorage", () => {
  //   service.removeToken();
  //
  //   expect(service.removeToken).toHaveBeenCalledTimes(1);
  // });


  // let service: LoginService;

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
