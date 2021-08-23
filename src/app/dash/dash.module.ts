import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';

const routes: Routes = [
  {
    path: '',
    component: DashComponent
  }
];

@NgModule({
  declarations: [
    DashComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashModule { }
