
import {Routes, RouterModule} from "@angular/router";
import {LandingComponent} from "./components/landing.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
    {path: 'landing', component: LandingComponent}
];


@NgModule({
    declarations: [
        LandingComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ]
})

export class LandingModule {}