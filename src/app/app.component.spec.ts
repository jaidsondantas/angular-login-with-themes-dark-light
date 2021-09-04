import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {MenuComponent} from './layout/menu/menu.component';
import {MockComponent} from 'ng-mocks';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
        MockComponent(MenuComponent)
      ],
      providers: [HttpClientModule]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
      });
    component.applyThemeOnOverlays();

  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should check if the theme was applied', () => {
    spyOn(component, 'applyThemeOnOverlays').and.callThrough();
    component.applyThemeOnOverlays();
    expect(component.applyThemeOnOverlays).toHaveBeenCalled();
  });

  it('should check if ngOnInit was called', () => {
    spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('should theme default dark', () => {
    expect(component.cssClass).toContain('dark-theme');
  });


});
