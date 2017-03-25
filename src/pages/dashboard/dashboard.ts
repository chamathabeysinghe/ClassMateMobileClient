import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ClassRoom } from "../../models/Class";
import { ClassService } from "../../app/services/class.service";
import { ClassRoomPage } from "../classroom/classroom";

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  classes:ClassRoom[];
  constructor(public navCtrl: NavController,public classService:ClassService) {
      this.classes=[];
        this.classService.getClasses().subscribe(classroooms=>{
          // console.log(classroooms);
            this.classes=classroooms;
           console.log(this.classes);
        });
  }

  viewClass(classId){
    console.log("This is classID   "+classId);
    this.navCtrl.push(ClassRoomPage,{
      classId:classId
    })
  }

  
}
