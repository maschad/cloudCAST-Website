/**
 * Created by carlos on 7/13/17.
 */
import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {PageNotFoundComponent} from "./components/page-not-found.component";

const routes: Routes = [
    {path: '**', component: PageNotFoundComponent}
];


@NgModule({
    declarations: [
        PageNotFoundComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ]
})

export class PageNotFoundModule {}