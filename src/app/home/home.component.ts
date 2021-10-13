import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { nameFilter } from '@helpers/filters/name';
import { openedFilter } from '@helpers/filters/opened';
import { priceFilter } from '@helpers/filters/price';
import { setNumberFilter } from '@helpers/filters/set-number';
import { AppState, LegoSet, SetDialogResult } from '@interfaces';
import { Store } from '@ngrx/store';
import { setActions } from '@store/set-state/set.actions';
import { getAllSets, getFilters } from '@store/set-state/set.selectors';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SetDialogComponent } from '../sets/set-dialog';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    sets$: Observable<LegoSet[]>;

    constructor (
        private dialog: MatDialog,
        private store: Store<AppState>
    ) {

        this.sets$ = combineLatest([this.store.select(getAllSets), this.store.select(getFilters)])
            .pipe(map(([allSets, filters]) => {

                return allSets
                    .filter(nameFilter(filters))
                    .filter(openedFilter(filters))
                    .filter(priceFilter(filters))
                    .filter(setNumberFilter(filters));

            }));

    }

    onEdit (set: LegoSet) {

        this.dialog.open(SetDialogComponent, { data: { set, enableDelete: true }, width: '540px' })
            .afterClosed().subscribe((result: SetDialogResult | undefined) => {

                if (result?.set) {

                    this.store.dispatch(setActions.updateSet({ id: `${set.id}`, set: result.set }));

                } else if (result?.delete) {

                    this.store.dispatch(setActions.deleteSet({ id: `${set.id}` }));

                }

            });

    }

}
