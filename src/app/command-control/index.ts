import {Routes, RouterModule} from "@angular/router";
import {CommandControlComponent} from "./components/command-control.component";
import {NgModule} from "@angular/core";
import {MatListModule} from "@angular/material";
/**
 * Created by carlos on 7/16/17.
 */

const routes: Routes = [
    {path: 'resources/professionals/exemplars/command-control', component:CommandControlComponent}
];

@NgModule({
    declarations: [
        CommandControlComponent
    ],
    imports: [
        MatListModule,
        RouterModule.forChild(routes)
    ]
})

export class CommandControlModule {}
