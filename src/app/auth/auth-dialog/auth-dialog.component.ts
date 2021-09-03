import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-auth-dialog',
    styleUrls: ['./auth-dialog.component.scss'],
    templateUrl: './auth-dialog.component.html'
})
export class AuthDialogComponent {

    authForm: FormGroup;
    hide = true;

    constructor (
        private authService: AuthService,
        private dialogRef: MatDialogRef<AuthDialogComponent>,
        private formBuilder: FormBuilder
    ) {

        this.authForm = this.formBuilder.group({
            email: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required]]
        });

    }

    submit () {

        if (this.authForm?.valid) {

            this.authService.login(this.authForm.get('email')?.value, this.authForm.get('password')?.value)
                .then(({ user }) => {

                    if (user) {

                        this.dialogRef.close();

                    }

                });

        }

    }

}
