import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './guards/auth.guards';
import {WorkspaceComponent} from './workspace/workspace.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent},  /*, canActivate: [AuthGuard] },*/
  { path: '**', redirectTo: '' },
  { path: 'workspace', component: WorkspaceComponent}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
