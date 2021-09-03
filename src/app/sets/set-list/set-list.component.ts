import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { AppState, LegoSet, SetDialogResult } from '@interfaces';
import { Store } from '@ngrx/store';
import { setActions } from '@store/set-state/set.actions';
import { getAllSets, getFilters } from '@store/set-state/set.selectors';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { nameFilter } from './filters/name';
import { openedFilter } from './filters/opened';
import { priceFilter } from './filters/price';
import { setNumberFilter } from './filters/set-number';
import { FilterSheetComponent } from '../filter-sheet';
import { SetDialogComponent } from '../set-dialog';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { DataService } from '@services/data';

@Component({
    styleUrls: ['./set-list.component.scss'],
    templateUrl: './set-list.component.html'
})
export class SetListComponent {

    sets$: Observable<LegoSet[]>;

    constructor (
        // private dataService: DataService,
        private dialog: MatDialog,
        // private firestore: AngularFirestore,
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

                // console.log('closed!', result?.set);
                if (result?.set) {

                    this.store.dispatch(setActions.updateSet({ id: `${set.id}`, set: result.set }));
                    // this.dataService.updateSet(set.id, result.set);

                } else if (result?.delete) {

                    this.store.dispatch(setActions.deleteSet({ id: `${set.id}` }));
                    // this.firestore.collection('set').doc(set.id).delete();

                }

            });

    }

    trackById (index: number, { id }: any) {

        return id;

    }

}
