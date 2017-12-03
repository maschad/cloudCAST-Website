import {Routes, RouterModule} from "@angular/router";
import {DashboardComponent} from "./components/dashboard.component";
import {NgModule} from "@angular/core";
import {MatListModule} from "@angular/material";
import { AuthGuard } from '../_guards/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatToolbarModule,
  MatCardModule
} from '@angular/material';

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
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatToolbarModule,
        MatCardModule,
        MatGridListModule,
        MatSidenavModule,
        BrowserModule,
        RouterModule.forChild(routes)
    ]
})

export class DashboardModule {}
