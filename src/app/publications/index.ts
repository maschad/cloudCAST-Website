import {Routes, RouterModule} from "@angular/router";
import {PublicationsComponent} from "./components/publications.component";
import {NgModule} from "@angular/core";
import {MatListModule} from "@angular/material";
/**
 * Created by carlos on 7/16/17.
 */

const routes: Routes = [
    {path: 'publications', component:PublicationsComponent}
];

@NgModule({
    declarations: [
        PublicationsComponent
    ],
    imports: [
        MatListModule,
        RouterModule.forChild(routes)
    ]
})

export class PublicationsModule {}
