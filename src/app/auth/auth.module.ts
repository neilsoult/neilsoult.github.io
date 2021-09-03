import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthDialogComponent } from './auth-dialog';
import { AppMaterialModule } from '../app-material.module';

@NgModule({
    declarations: [
        AuthDialogComponent
    ],
    imports: [
        AppMaterialModule,
        ReactiveFormsModule
    ]
})
export class AuthModule { }
