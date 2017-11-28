import { Component,Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApplicationsService} from "../../_services/applications.service";




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  styles = "hide-project-content";

  constructor(private applicationsService: ApplicationsService
  ) { }
  private applications;
  private users;
  description: string;
  name: string;
  ngOnInit() {
    this.getApplications();
  }


  toggleStyles(){
    console.log("clicked");
    if(this.styles == "hide-project-content" )
    {
        this.styles = "show-project-content";
    }
    else if(this.styles = "show-project-content"){
      this.styles == "hide-project-content"
    }

  }

  getApplications(){
    this.applicationsService.getAll("andre")
        .subscribe(data => {
                console.log(data);
                this.applications = data;
                this.users = this.applications.users;
                console.log(this.applications[0].users[0].name);
              },
            error => {

            });
  }

}
