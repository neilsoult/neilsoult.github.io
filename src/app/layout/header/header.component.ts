import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { AuthDialogComponent } from '@auth/auth-dialog';
import { AuthService } from '@auth/auth.service';
import { AppState, SetDialogResult } from '@interfaces';
import { Store } from '@ngrx/store';
import { StorageService } from '@services/storage';
import { setActions } from '@store/set-state/set.actions';
import { getFiltersExist, getTotalCount, getTotalPrice } from '@store/set-state/set.selectors';
import { FilterSheetComponent } from 'src/app/sets/filter-sheet';
import { SetDialogComponent } from 'src/app/sets/set-dialog';
import { ApiKeyDialogComponent } from '../api-key-dialog';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-header',
    styleUrls: ['./header.component.scss'],
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    @Input() disableMenu = '';

    bricksetApiKey = this.storageService.getStore<string>('brickset_api_key');
    canClearFilters$ = this.store.select(getFiltersExist);
    rebrickableApiKey = this.storageService.getStore<string>('rebrickable_api_key');
    totalCount$ = this.store.select(getTotalCount);
    totalPrice$ = this.store.select(getTotalPrice);
    user$ = this.authService.user$;

    constructor (
        private authService: AuthService,
        private dialog: MatDialog,
        private matBottomSheet: MatBottomSheet,
        private storageService: StorageService,
        private store: Store<AppState>
    ) { }

    clearFilters () {

        this.store.dispatch(setActions.updateFilters({ filters: {} }));

    }

    login () {

        this.dialog.open(AuthDialogComponent, { width: '360px' });

    }

    newSet () {

        this.dialog.open(SetDialogComponent, { data: { set: {} }, width: '540px' })
            .afterClosed().subscribe(({ set }: SetDialogResult) => {

                this.store.dispatch(setActions.addSet({ set }));
                // this.firestore.collection('set').add(set);

            });

    }

    openApiKeyDialog () {

        this.dialog.open(ApiKeyDialogComponent, { width: '540px;' });

    }

    refreshData () {

        this.store.dispatch(setActions.fetchSets());

    }

    showFilters () {

        this.matBottomSheet.open(FilterSheetComponent);

    }

}
