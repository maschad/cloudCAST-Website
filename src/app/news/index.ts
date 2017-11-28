import {Routes, RouterModule} from "@angular/router";
import {NewsComponent} from "./components/news.component";
import {NgModule} from "@angular/core";
import {MatListModule} from "@angular/material";
/**
 * Created by carlos on 7/16/17.
 */

const routes: Routes = [
    {path: 'news', component:NewsComponent}
];

@NgModule({
    declarations: [
        NewsComponent
    ],
    imports: [
        MatListModule,
        RouterModule.forChild(routes)
    ]
})

export class NewsModule {}
