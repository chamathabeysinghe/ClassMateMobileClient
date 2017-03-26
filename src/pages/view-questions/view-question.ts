import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { ClassRoom } from "../../models/Class";
import { ClassService } from "../../app/services/class.service";
import { Lecture } from "../../models/Lecture";
import { AddFeedbackPage } from "../add-feedback/add-feedback";
import { AddQuestionPage } from "../add-question/add-question";
import { Question } from "../../models/Question";

@Component({
  selector: 'page-view-question',
  templateUrl: 'view-question.html'
})
export class ViewQuestionsPage {
  questions:Question[];
  currentLectureID:any;
  constructor(public navCtrl: NavController,public classService:ClassService,public params:NavParams) {
        this.currentLectureID=params.get('lectureId');
        this.classService.getQuestions(this.currentLectureID).subscribe(questions=>{
          this.questions=questions;
          console.log(this.questions);
        });        
  }
}
