import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { AddclassComponent } from './addclass/addclass.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewclassesComponent } from './viewclasses/viewclasses.component';
import { ViewteachersComponent } from './viewteachers/viewteachers.component';
import { AddteacherComponent } from './addteacher/addteacher.component';
import {DataService} from './data.service';
import {AuthService} from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewstudentsComponent } from './viewstudents/viewstudents.component';
import { ListusersComponent } from './listusers/listusers.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';  // replaces previous Http service
import {FlashMessagesModule} from 'angular2-flash-messages';
import { RouterModule } from '@angular/router';
import { AddquizComponent } from './addquiz/addquiz.component';
import { DeletequizComponent } from './deletequiz/deletequiz.component';
import { ViewquizzesComponent } from './viewquizzes/viewquizzes.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ConceptsComponent,
    AddclassComponent,
    ViewclassesComponent,
    ViewteachersComponent,
    AddteacherComponent,
    ViewstudentsComponent,
    ListusersComponent,
    AddstudentComponent,
    DashboardComponent,
    LoginComponent,
    AddquizComponent,
    DeletequizComponent,
    ViewquizzesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    NgbModule,
    HttpClientModule,RouterModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [DataService,AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
