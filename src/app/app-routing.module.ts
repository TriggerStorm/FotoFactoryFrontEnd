import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './guards/auth.guards';
import {WorkspaceComponent} from './workspace/workspace.component';
import {DenmarkComponent} from './gallory/denmark/denmark.component';
import {FaroeIslandsComponent} from './gallory/faroe-islands/faroe-islands.component';
import {CopenhagenComponent} from './gallory/copenhagen/copenhagen.component';
import {BlackAndWhiteComponent} from './gallory/black-and-white/black-and-white.component';
import {ScotlandComponent} from './gallory/scotland/scotland.component';
import {FavouritesComponent} from './shared/favourites/favourites.component';
import {SummaryComponent} from './summary/summary.component';
import {SignupComponent} from './login/signup/signup.component';


const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'summary', component: SummaryComponent},
  {path: 'fav', component: FavouritesComponent},
  { path: 'workspace', component: WorkspaceComponent},
  { path: 'denmark', component: DenmarkComponent},
  { path: 'faroe-islands', component: FaroeIslandsComponent},
  { path: 'copenhagen', component: CopenhagenComponent},
  { path: 'black-and-white', component: BlackAndWhiteComponent},
  { path: 'scotland', component: ScotlandComponent},

  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent}, /*//, canActivate: [AuthGuard] },*/
  { path: '**', redirectTo: '' }];




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
