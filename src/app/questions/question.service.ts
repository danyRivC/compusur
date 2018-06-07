import { Injectable } from '@angular/core';
import { Question } from './question.model';
import { Http, Headers, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import * as urljoin from 'url-join';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class QuestionService {
    private questionsUrl: string;
    constructor(private http: Http) {
        this.questionsUrl = urljoin(environment.apiUrl, 'questions');
    }

    getQuestions(): Promise<void | Question[]> {
        return this.http.get(this.questionsUrl)
                   .toPromise()
                   .then(response => response.json() as Question[])
                   .catch(this.handleError);

    }
    getQuestion(id): Promise<void | Question> {
        const url = urljoin(this.questionsUrl, id);
        return this.http.get(url)
                   .toPromise()
                   .then(response => response.json() as Question)
                   .catch(this.handleError);
    }
    addQuestion(question: Question) {
        const body = JSON.stringify(question);
        const headers = new Headers({'Content-Type': 'aplication/json'});

        return this.http.post(this.questionsUrl, body, { headers })
          .pipe(map((response: Response) => response.json()), catchError((error: Response) => Observable.throw(error.json())));
    }
    handleError(error: any) {
        const errMsg = error.message ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.log(errMsg);


    }
}
