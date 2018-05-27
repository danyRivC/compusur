import { Component } from '@angular/core';
import { Question } from './question.model';
const q = new Question(
    '¿Como reutilizo un componente en Android?',
    'Miren esta es mi pregunta..',
    new Date(),
    'devicon-android-plain colored'
);
@Component({
    selector: 'app-question-list',
    templateUrl: 'question-list.component.html',
    styles:[`
    i{
        font-size:45px;
    }
    i.help{
        width: 45px !important;
        heigth: 45px !important;
        padding: 0 !important;
        font-size: 45px !important;
    }
    .add-question {
        position: fixed;
        bottom: 30px;
        right: 30px;
        font-size: 25px;
    }
    `]
})
export class QuestionListComponent {
    questions: Question[] = new Array(10).fill(q);

}
