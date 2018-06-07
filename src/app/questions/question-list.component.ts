import { Component, OnInit } from '@angular/core';
import { Question } from './question.model';
import { QuestionService } from './question.service';


@Component({
    selector: 'app-question-list',
    templateUrl: 'question-list.component.html',
    styles: [`
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
    `],
    providers: [QuestionService]
})
export class QuestionListComponent implements OnInit {
    constructor(private questionService: QuestionService) { }
    questions: Question[];
    loading = true;
    ngOnInit() {
        this.questionService
            .getQuestions()
            .then((questions: Question[]) => {
                this.questions = questions;
                this.loading = false;
            });
    }

}
