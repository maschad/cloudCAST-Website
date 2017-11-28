/**
 * Created by carlos on 7/13/17.
 */


import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./components/login.component";
import { LoginRedirect } from '../_services/login-redirect.service';
import {
  MatButtonModule, MatCheckboxModule, MatMenuModule, MatInputModule, MatSnackBarModule,
       MatToolbarModule, MatDialogModule, MatSidenavModule, MatNativeDateModule,
       MatCardModule, MatTabsModule, MatIconModule
} from "@angular/material";
import { FormsModule } from '@angular/forms';


const routes: Routes = [
    {path: 'login', component: LoginComponent , canActivate:[LoginRedirect]}
];


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports:[
        CommonModule,FormsModule,
        MatButtonModule, MatCheckboxModule, MatMenuModule, MatInputModule, MatSnackBarModule,
         MatToolbarModule, MatDialogModule, MatSidenavModule, MatNativeDateModule,
         MatCardModule, MatTabsModule, MatIconModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ]
})

export class LoginModule {}
