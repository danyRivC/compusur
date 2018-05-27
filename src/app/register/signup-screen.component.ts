import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './user.model';

@Component({
    selector: 'app-signup-screen',
    templateUrl: './signup-screen.component.html'
})
export class SignupScreenComponent implements OnInit {
    signupForm: FormGroup;
    hide = true;
    passwordNotCheck = false;
    ngOnInit() {
        this.signupForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
            ]),
            password: new FormControl(null, [Validators.required]),
            firstName: new FormControl(null, [Validators.required]),
            lastName: new FormControl(null, [Validators.required]),
            passwordCheck: new FormControl(null, [Validators.required])
        });
    }
    onSubmit() {
        if (this.signupForm.valid && this.signupForm.value.password === this.signupForm.value.passwordCheck) {
            const { email, password, passwordCheck, firstName, lastName} = this.signupForm.value;
            const user = new User (email, password, passwordCheck, firstName, lastName);
            this.passwordNotCheck = false;
            console.log(user);
        }
        if (this.signupForm.valid && this.signupForm.value.password !== this.signupForm.value.passwordCheck) {
            this.passwordNotCheck = true;
        }

    }}
