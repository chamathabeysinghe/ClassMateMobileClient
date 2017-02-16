import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {UserService} from '../../app/services/user.service'
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  email:string;
  password:string;
  constructor(public navCtrl: NavController,private userService: UserService) {

  }

  postLogin(){
    console.log(this.email,this.password);
    //this.userService.getPosts("food",10).subscribe();
    this.userService.logUser(this.email,this.password).subscribe();
  }
}



