import {Routes, RouterModule} from "@angular/router";
import {TherapyToolsComponent} from "./components/therapy-tools.component";
import {NgModule} from "@angular/core";
import {MatListModule} from "@angular/material";
/**
 * Created by carlos on 7/16/17.
 */

const routes: Routes = [
    {path: 'resources/professionals/exemplars/therapy-tools', component:TherapyToolsComponent}
];

@NgModule({
    declarations: [
        TherapyToolsComponent
    ],
    imports: [
        MatListModule,
        RouterModule.forChild(routes)
    ]
})

export class TherapyToolsModule {}
