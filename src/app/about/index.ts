import {Routes, RouterModule} from "@angular/router";
import {AboutComponent} from "./components/about.component";
import {NgModule} from "@angular/core";
import {MatListModule} from "@angular/material";
/**
 * Created by carlos on 7/16/17.
 */

const routes: Routes = [
    {path: 'about', component:AboutComponent}
];

@NgModule({
    declarations: [
        AboutComponent
    ],
    imports: [
        MatListModule,
        RouterModule.forChild(routes)
    ]
})

export class AboutModule {}
