import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {LoginService} from '../../shared/services/login.service';
import {MockLoginService} from '../../shared/services/login.service.spec';
import {RouterTestingModule} from '@angular/router/testing';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const RESPONSE_TOKEN = {
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzdWFyaW90ZXN0ZUBnbWFpbC5jb20iLCJzdWIiOiJja3N0ZmxqbnYwMDAybHNzcDJrYTk0YnlzIiwiaWF0IjoxNjMwNjY3Njc1LCJleHAiOjE2NjIyMDM2NzV9.KYqQcXHXNpyV6O-Fa3OyVte3cprjGcXHYvV4dizka2I",
  "user": {
    "id": "ckstfljnv0002lssp2ka94bys",
    "name": "Usuário Teste",
    "email": "usuarioteste@gmail.com",
    "password": "$2b$10$h3MkzDZj4afnib.5Sc87GOZKNA.HkTqFnYtq/UZe8Y97QMvKDYQMy",
    "salt": "$2b$10$QiBN63EmfjBMJ8YqNhshVO",
    "createdAt": "2021-08-26T21:21:46.000Z",
    "updatedAt": "2021-08-26T21:21:46.000Z"
  }
}


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let httpClient: HttpClient;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let loginService: LoginService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        RouterModule,
        MatCardModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatDividerModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        BrowserAnimationsModule
      ],
      declarations: [LoginComponent],
      providers: [
        {provide: LoginService, useClass: MockLoginService},
      ]
    })
      .compileComponents()
      .then(() => {
        injector = getTestBed();
        fixture = TestBed.createComponent(LoginComponent);
        httpClient = injector.inject(HttpClient);
        httpMock = injector.inject(HttpTestingController);
        component = fixture.componentInstance;
        loginService = injector.inject(LoginService)
      })
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should create login service', () => {
    expect(loginService).toBeTruthy();
  });

  it('should check if login was called', () => {
    spyOn(component, 'login').and.callThrough();
    component.login();
    expect(component.login).toHaveBeenCalled();
  });

  // it('should login in loginService return authenticate', () => {
  //
  //   const resUserAuthenticate = {
  //     "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
  //     "user": {
  //       "id": "ckstfljnv0002lssp2ka94bys",
  //       "name": "Usuário Teste",
  //       "email": "usuarioteste@gmail.com",
  //       "password": "$2b$10$h3MkzDZj4afnib.5Sc87GOZKNA.HkTqFnYtq/UZe8Y97QMvKDYQMy",
  //       "salt": "$2b$10$QiBN63EmfjBMJ8YqNhshVO",
  //       "createdAt": "2021-08-26T21:21:46.000Z",
  //       "updatedAt": "2021-08-26T21:21:46.000Z"
  //     }
  //   }
  //
  //   spyOn(loginService, 'login').and.returnValue(of(new HttpResponse({body: resUserAuthenticate})));
  //   component.login();
  //   fixture.detectChanges();
  //
  //   expect(loginService.login).toHaveBeenCalledTimes(1);
  //   expect(loginService.login).toHaveBeenCalledWith("usuarioteste@gmail.com", "123");
  //
  // })


});
