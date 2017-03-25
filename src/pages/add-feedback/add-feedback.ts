import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { ClassRoom } from "../../models/Class";
import { ClassService } from "../../app/services/class.service";
import { Lecture } from "../../models/Lecture";

@Component({
  selector: 'page-classroom',
  templateUrl: 'classroom.html'
})
export class AddFeedbackPage {
  lectures:Lecture[];
  currentClass=new ClassRoom();
  currentClassID:any;
  constructor(public navCtrl: NavController,public classService:ClassService,public params:NavParams) {
        this.currentClassID=params.get('classId');

        this.classService.getLectures(this.currentClassID).subscribe(lectures=>{
          this.lectures=lectures;
          console.log(this.lectures);
        });

        
  }



}
