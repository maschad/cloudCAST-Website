import {Routes, RouterModule} from "@angular/router";
import {ApiComponent} from "./components/api.component";
import {NgModule} from "@angular/core";
import {MatListModule} from "@angular/material";
/**
 * Created by carlos on 7/16/17.
 */

const routes: Routes = [
    {path: 'resources/databases/api', component:ApiComponent}
];

@NgModule({
    declarations: [
        ApiComponent
    ],
    imports: [
        MatListModule,
        RouterModule.forChild(routes)
    ]
})

export class ApiModule {}
