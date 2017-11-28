import {Routes, RouterModule} from "@angular/router";
import {PartnersComponent} from "./components/partners.component";
import {NgModule} from "@angular/core";
import {MatListModule} from "@angular/material";
/**
 * Created by carlos on 7/16/17.
 */

const routes: Routes = [
    {path: 'partners', component:PartnersComponent}
];

@NgModule({
    declarations: [
        PartnersComponent
    ],
    imports: [
        MatListModule,
        RouterModule.forChild(routes)
    ]
})

export class PartnersModule {}
