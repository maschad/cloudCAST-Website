import {Routes, RouterModule} from "@angular/router";
import {AboutComponent} from "./components/about.component";
import {NgModule} from "@angular/core";
import {MdListModule} from "@angular/material";
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
        MdListModule,
        RouterModule.forChild(routes)
    ]
})

export class AboutModule {}