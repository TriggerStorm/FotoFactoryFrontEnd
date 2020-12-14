import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { DenmarkComponent } from './gallory/denmark/denmark.component';
import { FaroeIslandsComponent } from './gallory/faroe-islands/faroe-islands.component';
import { CopenhagenComponent } from './gallory/copenhagen/copenhagen.component';
import { BlackAndWhiteComponent } from './gallory/black-and-white/black-and-white.component';
import { ScotlandComponent } from './gallory/scotland/scotland.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { FavouritesComponent } from './shared/favourites/favourites.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { SummaryComponent } from './summary/summary.component';
import { WorkspaceCanvasComponent } from './workspace/workspace-canvas/workspace-canvas.component';
import {NgxDropzoneModule} from "ngx-dropzone";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    NvbarComponent,
    DenmarkComponent,
    FaroeIslandsComponent,
    CopenhagenComponent,
    BlackAndWhiteComponent,
    ScotlandComponent,
    WorkspaceComponent,
    FavouritesComponent,
    SummaryComponent,
    WorkspaceCanvasComponent
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
        NgxPopper,
        DragDropModule,
        NgxDropzoneModule,
        FormsModule


    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
