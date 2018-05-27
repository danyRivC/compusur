import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes Creados
import { InicioComponent } from './components/home.component';
import { QuestionListComponent } from './questions/question-list.component';
import { SignupScreenComponent } from './register/signup-screen.component';
import { SigninScreenComponent } from './auth/signin-screen.component';
import { QuestionDetailComponent } from './questions/questions-detail.component';
import { QUESTION_ROUTES } from './questions/question.routing';

//Array de rutas
const appRoutes: Routes=[
    {path: '', component: QuestionListComponent, pathMatch: 'full'},
    {path: 'home', component: QuestionListComponent},
    {path: 'signup', component: SignupScreenComponent},
    {path: 'signin', component: SigninScreenComponent},
    {path: 'questions', children: QUESTION_ROUTES}   
];
//Exportar las variables de las rutas
export const appRoutingProviders: any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);