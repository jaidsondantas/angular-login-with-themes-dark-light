import {Component, HostBinding, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import {Subscription} from 'rxjs';
import {ThemeService} from '../shared/services/theme.service';
import {OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  @HostBinding('class') public cssClass: string;
  title = 'angular-login-with-themes-dark-light';
  themingSubscription: Subscription = new Subscription();

  constructor(
    private themeService: ThemeService,
    private overlayContainer: OverlayContainer,
    private renderer: Renderer2
  ) {
    this.cssClass = '';
  }


  ngOnInit(): void {
    this.themingSubscription = this.themeService.$theme.subscribe(_ => {
      this.cssClass = this.themeService.getTheme();
      this.applyThemeOnOverlays();
    });
  }

  applyThemeOnOverlays(): void {
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;

    const themeClassesToRemove = Array.from(this.themeService.themes);
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
      themeClassesToRemove.forEach(cls => {
        this.renderer.removeClass(document.body, cls)
      })
    }
    this.renderer.addClass(document.body, this.cssClass)
    overlayContainerClasses.add(this.cssClass);
  }
}
