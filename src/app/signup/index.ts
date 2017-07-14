/**
 * Created by carlos on 7/13/17.
 */

import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {SignupComponent} from "./component/signup.component";

const routes: Routes = [
    {path: 'signup', component: SignupComponent}
];


@NgModule({
    declarations: [
        SignupComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ]
})

export class SignupModule {}