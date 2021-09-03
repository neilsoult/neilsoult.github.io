import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LegoSet, SetDialogData, SetDialogResult } from '@interfaces';

@Component({
    selector: 'app-set-dialog',
    styleUrls: ['./set-dialog.component.scss'],
    templateUrl: './set-dialog.component.html'
})
export class SetDialogComponent {

    constructor (
        @Inject(MAT_DIALOG_DATA) public data: SetDialogData,
        private dialogRef: MatDialogRef<SetDialogComponent, SetDialogResult>
    ) { }

    onSaveSet (set?: LegoSet) {

        if (set) {

            this.dialogRef.close({ set });

        } else {

            this.dialogRef.close();

        }

    }

}
