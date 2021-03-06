import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Question } from './question.model';
import icons from './icons';
import { QuestionService } from './question.service';

@Component({
    selector: 'app-question-form',
    templateUrl: './question-form.component.html',
    styles: [`
        i{
            font-size: 35px;
        }
        .new-question{
            margin-top:15px;
        }
    `],
    providers: [QuestionService]
})
export class QuestionFormComponent {
    icons: Object[] = icons;
    constructor(private questionService: QuestionService){
    }
    getIconVersion(icon: any) {
        let version;
        if (icon.versions.font.includes('plain-wordmark')) {
            version = 'plain-wordmark';
        } else {
            version = icon.versions.font[0];
        }
        return version;
    }
    onSubmit(form: NgForm) {
        const q = new Question(
            form.value.title,
            form.value.description,
            new Date(),
            form.value.icon

        );
        this.questionService.addQuestion(q)
            .subscribe(
                ({ _id}) => console.log(_id),
                error => console.log(error)
            );
            form.resetForm();

    }

}
