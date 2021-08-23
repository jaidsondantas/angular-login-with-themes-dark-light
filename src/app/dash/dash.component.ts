import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../shared/services/login.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  constructor(
    public loginService: LoginService
  ) { }

  ngOnInit(): void {
    console.log(this.loginService.getUser())
  }

}
