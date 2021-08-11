import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { ApiKeyDialogComponent } from './api-key-dialog/api-key-dialog.component';
import { AppMaterialModule } from './app-material.module';
import { AppComponent } from './app.component';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { JsonDialogComponent } from './json-dialog/json-dialog.component';
import { SetDialogComponent } from './set-dialog/set-dialog.component';
import { SetFormComponent } from './set-form/set-form.component';
import { SetComponent } from './set/set.component';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { SetListComponent } from './set-list/set-list.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        SetComponent,
        SetDialogComponent,
        AuthDialogComponent,
        JsonDialogComponent,
        ApiKeyDialogComponent,
        SetFormComponent,
        SetListComponent,
        HeaderComponent
    ],
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AppMaterialModule,
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({}, {}),
        AppRoutingModule
    ],
    providers: [
        { provide: 'Window', useValue: window }
    ]
})
export class AppModule { }
