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
export class MenuComponent {

  readonly colors = COLORS;

  constructor(
    public themeService: ThemeService,
    public loginService: LoginService,
    private router: Router
  ) {
  }

  exit(): void {
    this.router.navigate(['/login']).then()
  }

}
