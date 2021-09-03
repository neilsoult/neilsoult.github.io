import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppState, LegoSet } from '@interfaces';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { DataService } from '@services/data';
import { StorageService } from '@services/storage';
import { of } from 'rxjs';
import { map, mapTo, mergeMap, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { setActions } from './set.actions';
import { getAllSets } from './set.selectors';

@Injectable()
export class SetEffects {

    addSet$ = createEffect(() => {

        return this.actions$.pipe(ofType(setActions.addSet), tap(({ set }) => {

            this.dataService.addSet(set);
            this.matSnackBar.open(`${set.name} Added!`, 'OK', {
                duration: 3000,
                horizontalPosition: 'right',
                verticalPosition: 'top'
            });


        }));

    }, { dispatch: false });

    deleteSet$ = createEffect(() => {

        return this.actions$.pipe(ofType(setActions.deleteSet), tap(({ id }) => {

            this.dataService.deleteSet(id);

        }));

    }, { dispatch: false });

    fetchSets$ = createEffect(() => {

        return this.actions$.pipe(ofType(setActions.fetchSets), mergeMap(() => {

            return this.dataService.getAll$().pipe(map((sets) => {

                return setActions.updateSetStore({ sets });

            }));

        }));

    });

    init$ = createEffect(() => {

        return this.actions$.pipe(ofType(setActions.init), switchMap(() => {

            const sets = this.storageService.getStore<LegoSet[]>('sets');
            if (sets) {

                return of(setActions.updateSetStore({ sets }));

            }

            return of(setActions.fetchSets());

        }));

    });

    updateSet$ = createEffect(() => {

        return this.actions$.pipe(ofType(setActions.updateSet), map(({ id, set }) => {

            this.dataService.updateSet(id, set);
            this.matSnackBar.open(`Set ${set.number} Updated!`, 'OK', {
                duration: 3000,
                horizontalPosition: 'right',
                verticalPosition: 'top'
            });
            return setActions.updateStorage();

        }));

    });

    updateSetStore$ = createEffect(() => {

        return this.actions$.pipe(ofType(setActions.updateSetStore), mapTo(setActions.updateStorage()));

    });

    updateStorage$ = createEffect(() => {

        return this.actions$.pipe(
            ofType(setActions.updateStorage),
            withLatestFrom(this.store.select(getAllSets)),
            tap(([, sets]) => {

                this.storageService.setStore('sets', sets);

            })
        );

    }, { dispatch: false });

    constructor (
        private actions$: Actions,
        private dataService: DataService,
        private matSnackBar: MatSnackBar,
        private storageService: StorageService,
        private store: Store<AppState>
    ) { }

}
