import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DashComponent} from './dash.component';
import {LoginService} from '../../shared/services/login.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MockLoginService} from '../../shared/services/login.service.spec';
import {DashService} from './dash.service';
import {MockDashService} from './dash.service.spec';


describe('DashComponent', () => {
  let component: DashComponent;
  let fixture: ComponentFixture<DashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [DashComponent],
      providers: [
        {provide: LoginService, useClass: MockLoginService},
        {provide: DashService, useClass: MockDashService}
      ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(DashComponent);
        component = fixture.componentInstance;
      })
  });

  it('should create component dash', () => {
    expect(component).toBeTruthy();
  });
});
