/**
 * Created by carlos on 7/24/17.
 */

import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ContactComponent} from "./components/contact.component";
import {MatInputModule} from "@angular/material";

const routes: Routes = [
    {path: 'contact', component: ContactComponent}
];


@NgModule({
    declarations: [
        ContactComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        MatInputModule,
        RouterModule.forChild(routes)
    ]
})

export class ContactModule {}
