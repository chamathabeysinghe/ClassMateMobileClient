import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from "../pages/login/login";
import { ClassRoomPage } from "../pages/classroom/classroom";
import { DashboardPage } from "../pages/dashboard/dashboard";
import { AddFeedbackPage } from "../pages/add-feedback/add-feedback";
import { AddQuestionPage } from "../pages/add-question/add-question";
import { ViewQuestionsPage } from "../pages/view-questions/view-question";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    TabsPage,
    ClassRoomPage,
    DashboardPage,
    AddFeedbackPage,
    AddQuestionPage,
    ViewQuestionsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    ClassRoomPage,
    DashboardPage,
    AddFeedbackPage,
    TabsPage,
    AddQuestionPage,
    ViewQuestionsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
