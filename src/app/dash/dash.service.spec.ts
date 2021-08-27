import { TestBed } from '@angular/core/testing';

import { DashService } from './dash.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('DashService', () => {
  let service: DashService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[DashService]
    });
    service = TestBed.inject(DashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
