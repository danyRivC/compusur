import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './user.model';

@Component({
    selector: 'app-signing-screen',
    templateUrl: './signin-screen.component.html',
    styles: [`
    .mat-fab.mat-accent, .mat-flat-button.mat-accent, .mat-mini-fab.mat-accent, .mat-raised-button.mat-accent {
        background: rgb(48, 157, 190)!important;
        
    `]
})
export class SigninScreenComponent implements OnInit {
    signinForm: FormGroup;

    ngOnInit() {
        this.signinForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
            ]),
            password: new FormControl(null, [
                Validators.required
            ])
        });
    }
    onSubmit() {
        if (this.signinForm.valid) {
            const { email, password} = this.signinForm.value;
            const user = new User(email, password);
            console.log(user);
        }
    }
}
