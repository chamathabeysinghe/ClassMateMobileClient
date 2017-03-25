import { Component } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ClassRoom } from "../../models/Class";
import { ClassService } from "../../app/services/class.service";
import { Lecture } from "../../models/Lecture";
import { DashboardPage } from "../dashboard/dashboard";

@Component({
  selector: 'page-add-question',
  templateUrl: 'add-question.html'
})
export class AddQuestionPage {
  lectureId:any;
  submitFeedback={details:"",semantic:"",_lecture:""};

  constructor(public navCtrl: NavController,public classService:ClassService,public params:NavParams,public alertCtrl:AlertController) {
        this.submitFeedback._lecture=params.get('lectureId');        
  }

  
  saveFeedback(){
    console.log(this.submitFeedback);
    this.classService.createFeedback(this.submitFeedback).subscribe(data=>{
      if(data.success){
        this.navCtrl.push(DashboardPage);
      }
      else{

        let alert = this.alertCtrl.create({
          title: 'Error!',
          subTitle: data.msg,
          buttons: ['OK']
        });
        alert.present();
        
      }
    });
  }

}
