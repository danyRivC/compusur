import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// imports de material Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { InicioComponent } from './components/home.component';
import { routing } from './app.routing';
import { MaterialModule } from './material.module';
import { QuestionDetailComponent } from './questions/questions-detail.component';
import { MomentModule } from 'ngx-moment';
import { AnswerFormComponent } from './answers/answers-form.component';
import { SigninScreenComponent } from './auth/signin-screen.component';
import { SignupScreenComponent } from './register/signup-screen.component';
import { QuestionListComponent } from './questions/question-list.component';
import { QuestionFormComponent } from './questions/question-form.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    QuestionDetailComponent,
    AnswerFormComponent,
    SigninScreenComponent,
    SignupScreenComponent,
    QuestionListComponent,
    QuestionFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    MaterialModule,
    MomentModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
