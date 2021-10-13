import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterSheetComponent } from './filter-sheet';
import { SetCardComponent } from './set-card';
import { SetDialogComponent } from './set-dialog';
import { SetFormComponent } from './set-form';
import { SetListComponent } from './set-list';
import { AppMaterialModule } from '../app-material.module';

@NgModule({
    declarations: [
        SetCardComponent,
        SetDialogComponent,
        SetFormComponent,
        SetListComponent,
        FilterSheetComponent
    ],
    exports: [
        SetListComponent
    ],
    imports: [
        AppMaterialModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class SetsModule { }
