import {Question} from '../questions/question.model';
export class User{
    constructor(
        public firtName: String,
        public lastName:String ){

    }
}
export class Answer{
    constructor(
        public description: string,
        public question: Question,
        public createdAt?: Date,
        public user?: User 

    ){

    }
}