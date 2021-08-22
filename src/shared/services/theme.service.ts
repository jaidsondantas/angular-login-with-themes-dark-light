import {ApplicationRef, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ThemeInterface} from '../interfaces/theme.interface';
import {OverlayContainer} from '@angular/cdk/overlay';

export const CONFIG_THEME: ThemeInterface = {
  isDark: true,
  color: 'red'
};

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  $theme: BehaviorSubject<ThemeInterface> = new BehaviorSubject<ThemeInterface>(CONFIG_THEME);
  themes = ['$theme-red-light', "theme-red-dark"];

  constructor(
    private overlayContainer: OverlayContainer,
    private ref: ApplicationRef
  ) {

  }

  getTheme(): any {
    return `theme-${this.$theme.value.color}-${this.$theme.value.isDark ? 'dark' : 'light'}`;
  }

  changeDark(): void {
    this.$theme.next({
      ...this.$theme.value,
      isDark: !this.$theme.value.isDark,
    })
  }


}
