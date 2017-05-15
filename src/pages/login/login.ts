import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { UserService } from '../../app/services/user.service'
import { AboutPage } from "../about/about";
import { DashboardPage } from "../dashboard/dashboard";
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  email:string;
  password:string;
  constructor(public alertCtrl: AlertController,public navCtrl: NavController,private userService: UserService) {

  }

  postLogin(){
    console.log(this.email,this.password);

    //this.userService.getPosts("food",10).subscribe();
    this.userService.logUser(this.email,this.password).subscribe(
      response=>{
        if(response.success==true){
          localStorage.removeItem('id_token');
          localStorage.setItem('id_token', response.token);
          console.log(response);
          this.navCtrl.push(DashboardPage);
        }
        else{
          console.log("error in authentication");
          let alert=this.alertCtrl.create({
            title: 'Login Fails',
            subTitle: 'Invalid Login Details',
            buttons: ['OK']
          });
          alert.present();
        }

      },
      error => {
        console.log(error.text());
        let alert=this.alertCtrl.create({
          title: 'Login Fails',
          subTitle: 'Invalid Login Details',
          buttons: ['OK']
        });
        alert.present();
      }
    );
  }
}



