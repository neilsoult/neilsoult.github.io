import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '@auth/auth.service';
import { BRICKSET_KEY, REBRICK_KEY } from '@constants/keys';
import { AppState, LegoSet } from '@interfaces';
import { JsonDialogComponent } from '@layout/json-dialog';
import { Store } from '@ngrx/store';
import { ApiService } from '@services/api';
import { StorageService } from '@services/storage';
import { setActions } from '@store/set-state/set.actions';


@Component({
    selector: 'app-set-card',
    styleUrls: ['./set-card.component.scss'],
    templateUrl: './set-card.component.html'
})
export class SetCardComponent {

    @Input() set: LegoSet | undefined;

    @Output() edit = new EventEmitter<LegoSet>();

    bricksetApiKey = this.storageService.getStore(BRICKSET_KEY);
    price = new FormControl();
    rebrickableApiKey = this.storageService.getStore(REBRICK_KEY);
    user$ = this.authService.user$;

    private get setNumber (): string {

        return this.set?.number.includes('-') ? this.set?.number : `${this.set?.number}-1`;

    }

    constructor (
        private apiService: ApiService,
        private authService: AuthService,
        private dialog: MatDialog,
        private storageService: StorageService,
        private store: Store<AppState>
    ) { }

    duplicate () {

        const dupe = { ...this.set! };
        delete dupe.id;
        this.store.dispatch(setActions.addSet({ set: dupe }));

    }

    getTitle (set: LegoSet): string {

        if (set.price) {

            return `Price Paid: $${set.price}`;

        }
        return '';
    }

    savePrice () {

        this.store.dispatch(setActions.updateSet({
            id: this.set!.id!,
            set: { id: this.set!.id, number: this.set!.number, price: this.price.value }
        }));

    }

    showDialog (serviceMethod: 'brickset' | 'rebrickable') {

        this.dialog.open(JsonDialogComponent, {
            data: { json$: this.apiService[serviceMethod](this.setNumber) },
            width: '960px'
        });

    }

}
