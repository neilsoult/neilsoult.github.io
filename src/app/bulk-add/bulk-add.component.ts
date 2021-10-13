import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { shapeBricksetResponse } from '@helpers/shape-brickset-response';
import { AppState, LegoSet, SetDialogResult } from '@interfaces';
import { Store } from '@ngrx/store';
import { setActions } from '@store/set-state/set.actions';
import { BehaviorSubject } from 'rxjs';
import { SetDialogComponent } from '../sets/set-dialog';

@Component({
    templateUrl: './bulk-add.component.html',
    styleUrls: ['./bulk-add.component.scss']
})
export class BulkAddComponent {

    private sets = new BehaviorSubject<LegoSet[]>([]);

    jsonInput = new FormControl('', [Validators.required]);
    sets$ = this.sets.asObservable();

    constructor (
        private dialog: MatDialog,
        private store: Store<AppState>
    ) { }

    onEdit (set: LegoSet) {

        this.dialog.open(SetDialogComponent, { data: { set }, width: '540px' })
            .afterClosed().subscribe((result: SetDialogResult | undefined) => {

                if (result?.set) {

                    this.store.dispatch(setActions.addSet({ set: result.set }));
                    this.sets.next(this.sets.value.filter(({ number }) => {

                        return result.set.number !== number;

                    }));

                }

            });

    }

    onPreview () {

        if (this.jsonInput.valid) {

            try {

                const json = JSON.parse(this.jsonInput.value)?.sets;
                this.sets.next(json.map(shapeBricksetResponse));

            } catch { }

        }

    }

}
