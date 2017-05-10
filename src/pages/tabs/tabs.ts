import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { LoginPage } from "../login/login";
import { DashboardPage } from "../dashboard/dashboard";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  tab1Root: any = LoginPage;


  constructor() {
    console.log(localStorage.getItem("id_token"));

  }
}
