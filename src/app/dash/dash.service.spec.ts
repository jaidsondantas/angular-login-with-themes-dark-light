import {TestBed} from '@angular/core/testing';

import {DashService} from './dash.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {LoginService} from '../../shared/services/login.service';
import {MockLoginService} from '../../shared/services/login.service.spec';

export class MockDashService {

}

describe('DashService', () => {
  let service: DashService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        {provide: LoginService, useClass: MockLoginService},
      ]
    });
    service = TestBed.inject(DashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
