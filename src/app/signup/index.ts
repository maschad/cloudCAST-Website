/**
 * Created by carlos on 7/13/17.
 */

import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {SignupComponent} from "./component/signup.component";
import { LoginRedirect } from '../_services/login-redirect.service';
import {
  MatButtonModule, MatCheckboxModule, MatMenuModule, MatInputModule, MatSnackBarModule,
       MatToolbarModule, MatDialogModule, MatSidenavModule, MatNativeDateModule,
       MatCardModule, MatTabsModule, MatIconModule
} from "@angular/material";
const routes: Routes = [
    {path: 'resources/signup', component: SignupComponent, canActivate: [LoginRedirect]}
];


@NgModule({
    declarations: [
        SignupComponent
    ],
    imports:[
        CommonModule,MatButtonModule, MatCheckboxModule, MatMenuModule, MatInputModule, MatSnackBarModule,
         MatToolbarModule, MatDialogModule, MatSidenavModule, MatNativeDateModule,
         MatCardModule, MatTabsModule, MatIconModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ]
})

export class SignupModule {}
