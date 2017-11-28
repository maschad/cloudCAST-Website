import {Routes, RouterModule} from "@angular/router";
import {ExemplarsComponent} from "./components/exemplars.component";
import {NgModule} from "@angular/core";
import {MatListModule} from "@angular/material";

/**
 * Created by carlos on 7/16/17.
 */

const routes: Routes = [
    {path: 'resources/professionals/exemplars', component:ExemplarsComponent}
];

@NgModule({
    declarations: [
        ExemplarsComponent,
    ],
    imports: [
        MatListModule,
        RouterModule.forChild(routes)
    ]
})

export class ExemplarsModule {}
