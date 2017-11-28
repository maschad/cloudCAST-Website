import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CommonModule} from "@angular/common";
import {LandingModule} from "./landing/index";
import {
    MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule,
    MatInputModule,MatFormFieldModule,MatDialogModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {LoginModule} from "./login/index";
import {SignupModule} from "./signup/index";
import {AboutModule} from "./about/index";
import {PageNotFoundModule} from "./page-not-found/index";
import {TechnicalModule} from "./technical/index";
import {ContactModule} from "./contact/index";
import { AlertComponent } from './_directives/alert.component';
import { AuthGuard } from './_guards/auth.guard';
import { AlertService } from './_services/alert.service';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';
import { ExemplarsModule } from './exemplars/index';
import { CommandControlModule } from './command-control/index';
import { LiteracyTutorModule } from './literacy-tutor/index';
import { TherapyToolsModule } from './therapy-tools/index';
import { ApiModule } from './api/index';
import { BuildingPersonalRecognisersModule } from './building-personal-recognisers/index';
import { NewsModule } from './news/index';
import { PartnersModule } from './partners/index';
import { PublicationsModule } from './publications/index';
import { DashboardModule } from './dashboard/index';
import { LoginRedirect } from './_services/login-redirect.service';
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";
import { ApplicationsService } from './_services/applications.service';
import { PopupComponent } from './popup/popup.component';
//import { PublicationsComponent } from './publications/publications.component';
import {DialogOverviewExampleDialog} from './exemplars/components/exemplars.component';
import {DialogOverviewExampleDialog1} from './command-control/components/command-control.component';
import {DialogOverviewExampleDialog2} from './building-personal-recognisers/components/building-personal-recognisers.component';
import {DialogOverviewExampleDialog3} from './literacy-tutor/components/literacy-tutor.component';
import {DialogOverviewExampleDialog4} from './therapy-tools/components/therapy-tools.component';
import { FormsModule } from '@angular/forms';
import { SharedService } from './_services/shared-service.service';



@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    PopupComponent,
    DialogOverviewExampleDialog,
    DialogOverviewExampleDialog1,
    DialogOverviewExampleDialog2,
    DialogOverviewExampleDialog3,
    DialogOverviewExampleDialog4
  //  PublicationsComponent,
  ],
  entryComponents:[DialogOverviewExampleDialog,  DialogOverviewExampleDialog1,
    DialogOverviewExampleDialog2,
    DialogOverviewExampleDialog3,
    DialogOverviewExampleDialog4],
  imports: [
    AboutModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    ContactModule,
    LandingModule,
    LoginModule,
    ExemplarsModule,
    CommandControlModule,
    LiteracyTutorModule,
    TherapyToolsModule,
    ApiModule,
    BuildingPersonalRecognisersModule,
    NewsModule,
    PartnersModule,
    PublicationsModule,
    DashboardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    RouterModule.forRoot([], {enableTracing: true, useHash: false}),
    SignupModule,
    TechnicalModule,
    PageNotFoundModule,
  ],
  providers: [ AuthGuard, AlertService, AuthenticationService, UserService, LoginRedirect, ApplicationsService, SharedService],

  bootstrap: [AppComponent]
})
export class AppModule {

 }
