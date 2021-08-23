import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../shared/services/login.service';
import {DashService} from '../dash/dash.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  form: FormGroup
  loading: boolean = false;
  error: any;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private dashService: DashService
  ) {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.required]]
      }
    )
  }

  ngOnInit(): void {
  }

  login(): void {
    this.error = null;
    this.loading = true;
    this.loginService.login(this.form.get('email')?.value, this.form.get('password')?.value)
      .subscribe(res => {
        this.loginService.setToken(res.accessToken);
        this.loginService.setUser(res.user);
        this.dashService.redirectDash();
        console.log(res)
      }, error => {
        this.loading = false;
        this.error = error.error.error;
      })
  }


}
