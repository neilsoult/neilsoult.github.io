import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LegoSet } from '@interfaces';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
import { JsonDialogComponent } from '../json-dialog';
import { BRICKSET_KEY, REBRICK_KEY } from '../keys';
import { StorageService } from '../storage.service';

@Component({
    selector: 'app-set',
    styleUrls: ['./set.component.scss'],
    templateUrl: './set.component.html'
})
export class SetComponent {

    @Input() set: LegoSet | null = null;

    @Output() edit = new EventEmitter<LegoSet>();

    bricksetApiKey = this.storageService.getStore(BRICKSET_KEY);
    rebrickableApiKey = this.storageService.getStore(REBRICK_KEY);
    user$ = this.authService.user$;

    private get setNumber (): string {

        return this.set?.number.includes('-') ? this.set?.number : `${this.set?.number}-1`;

    }

    constructor (
        private apiService: ApiService,
        private authService: AuthService,
        private dialog: MatDialog,
        private storageService: StorageService
    ) { }

    showDialog (serviceMethod: 'brickset' | 'rebrickable') {

        this.dialog.open(JsonDialogComponent, {
            data: { json$: this.apiService[serviceMethod](this.setNumber) },
            width: '960px'
        });

    }

}
