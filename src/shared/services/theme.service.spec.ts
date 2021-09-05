import {TestBed} from '@angular/core/testing';

import {ThemeService} from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should return change changeDark", () => {
    const theme = service.getTheme();
    service.changeDark();
    expect(theme).not.toEqual(service.getTheme());
  });

  it("should return change changeColorPrimary", () => {
    const theme = service.getTheme();
    service.changeColorPrimary();
    expect(theme).toEqual(service.getTheme());
  });

});
