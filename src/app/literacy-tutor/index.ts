import {Routes, RouterModule} from "@angular/router";
import {LiteracyTutorComponent} from "./components/literacy-tutor.component";
import {NgModule} from "@angular/core";
import {MatListModule} from "@angular/material";
/**
 * Created by carlos on 7/16/17.
 */

const routes: Routes = [
    {path: 'resources/professionals/exemplars/literacy-tutor', component:LiteracyTutorComponent}
];

@NgModule({
    declarations: [
        LiteracyTutorComponent
    ],
    imports: [
        MatListModule,
        RouterModule.forChild(routes)
    ]
})

export class LiteracyTutorModule {}
