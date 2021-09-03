import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiKeyDialogComponent } from './api-key-dialog';
import { HeaderComponent } from './header';
import { JsonDialogComponent } from './json-dialog';
import { AppMaterialModule } from '../app-material.module';

@NgModule({
    declarations: [
        ApiKeyDialogComponent,
        HeaderComponent,
        JsonDialogComponent
    ],
    exports: [
        HeaderComponent
    ],
    imports: [
        AppMaterialModule,
        CommonModule,
        FormsModule
    ]
})
export class LayoutModule { }
