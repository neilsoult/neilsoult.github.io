import { Component } from '@angular/core';
import { BRICKSET_KEY, REBRICK_KEY } from '../keys';
import { StorageService } from '../storage.service';

@Component({
    selector: 'app-api-key-dialog',
    styleUrls: ['./api-key-dialog.component.scss'],
    templateUrl: './api-key-dialog.component.html'
})
export class ApiKeyDialogComponent {

    data: Record<'brickset' | 'rebrickable', { saved: boolean, value: string | null }>;

    constructor (private storageService: StorageService) {

        const bricksetApiKey = this.storageService.getStore<string>(BRICKSET_KEY);
        const rebrickableApiKey = this.storageService.getStore<string>(REBRICK_KEY);
        this.data = {
            brickset: { saved: !!bricksetApiKey, value: bricksetApiKey },
            rebrickable: { saved: !!rebrickableApiKey, value: rebrickableApiKey }
        };
    }

    deleteBricksetApiKey () {

        this.storageService.removeStore(BRICKSET_KEY);
        this.data.brickset = { saved: false, value: '' };

    }

    deleteRebrickableApiKey () {

        this.storageService.removeStore(REBRICK_KEY);
        this.data.rebrickable = { saved: false, value: '' };

    }

    saveBricksetApiKey () {

        const value = this.data.brickset.value;
        if (value && this.storageService.setStore(BRICKSET_KEY, value)) {

            this.data.brickset = { saved: true, value };

        }

    }

    saveRebrickableApiKey () {

        const value = this.data.rebrickable.value;
        if (value && this.storageService.setStore(REBRICK_KEY, value)) {

            this.data.rebrickable = { saved: true, value };

        }

    }

}
