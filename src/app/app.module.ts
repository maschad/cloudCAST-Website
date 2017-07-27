import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CommonModule} from "@angular/common";
import {LandingModule} from "./landing/index";
import {
    MdToolbarModule, MdButtonModule, MdMenuModule, MdIconModule,
    MdInputModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {LoginModule} from "./login/index";
import {SignupModule} from "./signup/index";
import {AboutModule} from "./about/index";
import {PageNotFoundModule} from "./page-not-found/index";
import {TechnicalModule} from "./technical/index";
import {ContactModule} from "./contact/index";
import { PublicationsComponent } from './publications/publications.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicationsComponent,
  ],
  imports: [
    AboutModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    ContactModule,
    LandingModule,
    LoginModule,
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    MdMenuModule,
    MdToolbarModule,
    RouterModule.forRoot([], {enableTracing: true, useHash: false}),
    SignupModule,
    TechnicalModule,
    PageNotFoundModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
