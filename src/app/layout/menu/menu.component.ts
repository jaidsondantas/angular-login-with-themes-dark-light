import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {COLORS, ThemeService} from '../../../shared/services/theme.service';
import {LoginService} from '../../../shared/services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

  readonly colors = COLORS;

  constructor(
    public themeService: ThemeService,
    public loginService: LoginService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  exit(): void {
    this.router.navigate(['/login']).then()
  }

}
