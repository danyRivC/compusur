import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
//imports de material Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { InicioComponent } from './components/home.component';
import { routing } from './app.routing';
import { MaterialModule } from './material.module';
import { QuestionDetailComponent } from './questions/questions-detail.component';
import { MomentModule } from 'ngx-moment';
import { AnswerFormComponent } from './answers/answers-form.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    QuestionDetailComponent,
    AnswerFormComponent
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    MaterialModule,
    MomentModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
