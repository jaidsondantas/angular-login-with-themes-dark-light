import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DashService {

  constructor(
    private router: Router
  ) { }

  redirectDash(): void {
    this.router.navigate(['/home']).then();
  }
}
