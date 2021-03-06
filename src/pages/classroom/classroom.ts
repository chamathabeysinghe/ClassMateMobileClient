import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { ClassRoom } from "../../models/Class";
import { ClassService } from "../../app/services/class.service";
import { Lecture } from "../../models/Lecture";
import { AddFeedbackPage } from "../add-feedback/add-feedback";
import { AddQuestionPage } from "../add-question/add-question";
import { ViewQuestionsPage } from "../view-questions/view-question";
import { ViewMaterialPage } from "../view-materials/view-material";

@Component({
  selector: 'page-classroom',
  templateUrl: 'classroom.html'
})
export class ClassRoomPage {
  lectures:Lecture[];
  currentClass=new ClassRoom();
  currentClassID:any;
  lastLectureID:any;
  constructor(public navCtrl: NavController,public classService:ClassService,public params:NavParams) {
        this.currentClassID=params.get('classId');

        this.classService.getLectures(this.currentClassID).subscribe(lectures=>{
          this.lectures=lectures;
          console.log(this.lectures);
          for(var i=0;i<this.lectures.length;i++){
            this.lastLectureID=lectures[i]._id;
            console.log(lectures[i]._id);
          }
        });        
  }


  viewClass(classId){
    console.log("This is classID   "+classId);
  }

  viewAddFeedbackForm(){
    this.navCtrl.push(AddFeedbackPage,{
      lectureId:this.lastLectureID
    })
  }

  viewAddQuestionForm(){
    this.navCtrl.push(AddQuestionPage,{
      lectureId:this.lastLectureID
    })
  }

  viewQuestionPage(lectureId){
    console.log(lectureId);
    this.navCtrl.push(ViewQuestionsPage,{
      lectureId:lectureId
    })
  }

  viewMaterialPage(lectureId){
    console.log(lectureId);
    this.navCtrl.push(ViewMaterialPage,{
      lectureId:lectureId
    });
  }

}
