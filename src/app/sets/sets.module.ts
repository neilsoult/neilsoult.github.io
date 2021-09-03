import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SetCardComponent } from './set-card';
import { SetDialogComponent } from './set-dialog';
import { SetFormComponent } from './set-form';
import { SetListComponent } from './set-list';
import { AppMaterialModule } from '../app-material.module';
import { FilterSheetComponent } from './filter-sheet/filter-sheet.component';

@NgModule({
    declarations: [
        SetCardComponent,
        SetDialogComponent,
        SetFormComponent,
        SetListComponent,
        FilterSheetComponent
    ],
    imports: [
        AppMaterialModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class SetsModule { }
