import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MenuComponent} from './menu.component';
import {LoginService} from '../../../shared/services/login.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {MockLoginService} from '../../../shared/services/login.service.spec';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatMenuModule,
        MatIconModule
      ],
      declarations: [MenuComponent],
      providers: [
        {provide: LoginService, useClass: MockLoginService},
      ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(MenuComponent);
        component = fixture.componentInstance;
      })
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
