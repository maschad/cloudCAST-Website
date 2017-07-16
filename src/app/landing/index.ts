
import {Routes, RouterModule} from "@angular/router";
import {LandingComponent} from "./components/landing.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {MdCardModule, MdButtonModule} from "@angular/material";
import {LandingService} from "./services/landing.service";
import {HttpModule} from "@angular/http";

const routes: Routes = [
    {path: '', component: LandingComponent}
];


@NgModule({
    declarations: [
        LandingComponent
    ],
    imports:[
        CommonModule,
        HttpModule,
        MdButtonModule,
        MdCardModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    providers: [LandingService]
})

export class LandingModule {}

export  {LandingService};