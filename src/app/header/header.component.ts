import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiKeyDialogComponent } from '../api-key-dialog';
import { AuthDialogComponent } from '../auth-dialog';
import { AuthService } from '../auth.service';
import { StorageService } from '../storage.service';

@Component({
    selector: 'app-header',
    styleUrls: ['./header.component.scss'],
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    bricksetApiKey = this.storageService.getStore<string>('brickset_api_key');
    rebrickableApiKey = this.storageService.getStore<string>('rebrickable_api_key');
    user$ = this.authService.user$;

    constructor (
        private authService: AuthService,
        private dialog: MatDialog,
        private storageService: StorageService
    ) { }

    login () {

        this.dialog.open(AuthDialogComponent, { width: '360px' });

    }

    openApiKeyDialog () {

        this.dialog.open(ApiKeyDialogComponent, { width: '540px;' });

    }

}
