import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NvbarComponent } from './home/nvbar/nvbar.component';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { NgxPopper } from 'angular-popper';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    NvbarComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgbModule,
        ButtonsModule.forRoot(),
        BrowserAnimationsModule,
        BsDropdownModule.forRoot(),
        NgxPopper
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
