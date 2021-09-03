import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-json-dialog',
    styleUrls: ['./json-dialog.component.scss'],
    templateUrl: './json-dialog.component.html'
})
export class JsonDialogComponent {

    constructor (@Inject(MAT_DIALOG_DATA) public data: any) { }

    stringify (input: any) {

        return JSON.stringify(input);

    }
}
