/**
 * Created by carlos on 7/24/17.
 */

/**
 * Created by carlos on 7/13/17.
 */
import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {TechnicalComponent} from "./components/technical.component";
import {ExemplarComponent} from "./components/exemplar.component";
import {PersonalComponent} from "./components/personal.component";
import {MdListModule} from "@angular/material";

const routes: Routes = [
    {
        path:'technical',
        component: TechnicalComponent,
        children: [
            {
                path:'exemplar',
                component: ExemplarComponent
            },
            {
                path:'personal',
                component: PersonalComponent
            }
        ]
    }
];


@NgModule({
    declarations: [
        ExemplarComponent,
        PersonalComponent,
        TechnicalComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        MdListModule,
        RouterModule.forChild(routes)
    ]
})

export class TechnicalModule {}