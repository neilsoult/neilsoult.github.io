import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@layout/layout.module';
import { environment } from 'src/environments/environment';
import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth';
import { BulkAddComponent } from './bulk-add';
import { HomeComponent } from './home';
import { SetsModule } from './sets';
import { AppStoreModule } from './store';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
        BulkAddComponent,
        HomeComponent
    ],
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AppMaterialModule,
        AppRoutingModule,
        AppStoreModule,
        AuthModule,
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        LayoutModule,
        ReactiveFormsModule,
        SetsModule
    ],
    providers: [
        { provide: 'Window', useValue: window }
    ]
})
export class AppModule { }
