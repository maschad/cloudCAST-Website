import {Routes, RouterModule} from "@angular/router";
import {BuildingPersonalRecognisersComponent} from "./components/building-personal-recognisers.component";
import {NgModule} from "@angular/core";
import {MatListModule} from "@angular/material";
/**
 * Created by carlos on 7/16/17.
 */

const routes: Routes = [
    {path: 'resources/developers/building-personal-recognisers', component:BuildingPersonalRecognisersComponent}
];

@NgModule({
    declarations: [
        BuildingPersonalRecognisersComponent
    ],
    imports: [
        MatListModule,
        RouterModule.forChild(routes)
    ]
})

export class BuildingPersonalRecognisersModule {}
