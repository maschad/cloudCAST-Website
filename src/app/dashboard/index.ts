import {Routes, RouterModule} from "@angular/router";
import {DashboardComponent} from "./components/dashboard.component";
import {NgModule} from "@angular/core";
import {MatListModule} from "@angular/material";
import { AuthGuard } from '../_guards/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
/**
 * Created by carlos on 7/16/17.
 */

const routes: Routes = [
    {path: 'dashboard', component:DashboardComponent , canActivate: [AuthGuard] }
];

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        MatListModule,
        BrowserModule,
        RouterModule.forChild(routes)
    ]
})

export class DashboardModule {}
