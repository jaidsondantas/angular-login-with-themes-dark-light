import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {COLORS, ThemeService} from '../../../shared/services/theme.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

  readonly colors = COLORS;

  constructor(
    public themeService: ThemeService
  ) {
  }

  ngOnInit(): void {
  }

}
