import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ApplicationsService} from "../../_services/applications.service";
import {UserService} from "../../_services/user.service";
@Component({
  selector: 'app-command-control',
  templateUrl: './command-control.component.html',
  styleUrls: ['./command-control.component.css']
})
export class CommandControlComponent implements OnInit {

  application: any = {};
  description: string;
  name: string;
  display_name:string;
  constructor(public dialog: MatDialog,private applicationsService:ApplicationsService,
  private userService:UserService) { }

  openDialog(type:string): void {
      let dialogRef = this.dialog.open(DialogOverviewExampleDialog1, {
        width: '500px',

        data: { name: this.name, description: this.description }

      });
      this.display_name = type;
      console.log(this.display_name);
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');

        this.name = result[0];
        this.description = result[1];
        console.log(this.description);
        console.log(this.name);
        this.userService.getLoggedInUser()
        .subscribe(
             data => {
                console.log("worked");
                 // set success message and pass true paramater to persist the message after redirecting to the login page
                console.log(data);
             },
             error => {
                console.log(error);
             });
        this.application = {name: this.name,display_name: this.display_name, description:this.description, users: []};

      });
    }



    createApplication(userId:string){
      this.application.users = {name: userId, role: "owner"};
      this.applicationsService.create(userId,this.application)
          .subscribe(data => {
                  console.log(data);

                },
              error => {

              });
    }

  ngOnInit() {
  }

}

@Component({
selector: 'dialog-overview-example',
templateUrl: '../../popup/popup.component.html',
})
export class DialogOverviewExampleDialog1 {

constructor(
  public dialogRef: MatDialogRef<DialogOverviewExampleDialog1>,
  @Inject(MAT_DIALOG_DATA) public data: any) { }

onNoClick(): void {
  this.dialogRef.close();
}

}
