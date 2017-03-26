import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { ClassRoom } from "../../models/Class";
import { ClassService } from "../../app/services/class.service";
import { Lecture } from "../../models/Lecture";
import { AddFeedbackPage } from "../add-feedback/add-feedback";
import { AddQuestionPage } from "../add-question/add-question";
import { Question } from "../../models/Question";
import { Material } from "../../models/Material";

@Component({
  selector: 'page-view-material',
  templateUrl: 'view-material.html'
})
export class ViewMaterialPage {

  materials:Material[];
  currentLectureID:any;
  
  constructor(public navCtrl: NavController,public classService:ClassService,public params:NavParams) {
        console.log("*************************************************************************************");
        this.currentLectureID=params.get('lectureId');
        this.classService.getMaterails(this.currentLectureID).subscribe(materials=>{
          this.materials=materials;
          console.log(this.materials);
        });        
  }

  downloadMaterial(materialId){
    
  }
}
