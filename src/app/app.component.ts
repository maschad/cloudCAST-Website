import { Component } from '@angular/core';
import {trigger, transition, animate, style} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
      trigger('searchState', [
          transition(':leave', [
              style({transform: 'translateX(-100%)'}),
              animate(1)
          ]),
          transition(':enter', [
              style({transform: 'translateX(100%)'}),
              animate(200)
          ])
      ])
  ]
})
export class AppComponent {
  private title:string = 'Cloudcast';
  private showSearchBar:boolean = false;


  private showSearch(): void {
        this.showSearchBar = !this.showSearchBar;

  }

}
