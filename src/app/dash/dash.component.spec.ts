import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashComponent } from './dash.component';
import {LoginService} from '../../shared/services/login.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('DashComponent', () => {
  let component: DashComponent;
  let fixture: ComponentFixture<DashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ DashComponent ],
      providers: [LoginService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
