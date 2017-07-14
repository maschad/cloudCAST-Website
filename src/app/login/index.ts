/**
 * Created by carlos on 7/13/17.
 */


import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./components/login.component";

const routes: Routes = [
    {path: 'login', component: LoginComponent}
];


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ]
})

export class LoginModule {}