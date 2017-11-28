
import {Routes, RouterModule} from "@angular/router";
import {LandingComponent} from "./components/landing.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {
  MatButtonModule, MatCheckboxModule, MatMenuModule, MatInputModule, MatSnackBarModule,
       MatToolbarModule, MatDialogModule, MatSidenavModule, MatNativeDateModule,
       MatCardModule, MatTabsModule, MatIconModule
} from "@angular/material";
import {LandingService} from "./services/landing.service";
import {HttpModule} from "@angular/http";

const routes: Routes = [
    {path: 'landing', component: LandingComponent},
    {path: '',
        redirectTo: '/landing',
        pathMatch: 'full'
    },
];


@NgModule({
    declarations: [
        LandingComponent
    ],
    imports:[
        CommonModule,
        HttpModule,
        MatButtonModule, MatCheckboxModule, MatMenuModule, MatInputModule, MatSnackBarModule,
             MatToolbarModule, MatDialogModule, MatSidenavModule, MatNativeDateModule,
             MatCardModule, MatTabsModule, MatIconModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    providers: [LandingService]
})

export class LandingModule {}

export  {LandingService};
