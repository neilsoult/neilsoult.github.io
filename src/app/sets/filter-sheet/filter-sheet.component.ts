import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { AppState } from '@interfaces';
import { Store } from '@ngrx/store';
import { setActions } from '@store/set-state/set.actions';
import { getFilters } from '@store/set-state/set.selectors';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-filter-sheet',
    templateUrl: './filter-sheet.component.html',
    styleUrls: ['./filter-sheet.component.scss']
})
export class FilterSheetComponent {

    nameFilter = new FormControl();
    numberFilter = new FormControl();
    openedFilter = new FormControl();
    priceFilter = new FormControl();
    subThemeFilter = new FormControl();
    themeFilter = new FormControl();

    constructor (
        private matBottomSheetRef: MatBottomSheetRef<FilterSheetComponent>,
        private store: Store<AppState>
    ) {

        this.store.select(getFilters).pipe(take(1)).subscribe((filters) => {

            this.nameFilter.setValue(filters.name);
            this.numberFilter.setValue(filters.setNumber);
            this.openedFilter.setValue(filters.opened);
            this.priceFilter.setValue(filters.priced);
            this.subThemeFilter.setValue(filters.subTheme);
            this.themeFilter.setValue(filters.theme);

        });

    }

    applyFilters () {

        this.store.dispatch(setActions.updateFilters({
            filters: {
                name: this.nameFilter.value,
                opened: this.openedFilter.value,
                priced: this.priceFilter.value,
                setNumber: this.numberFilter.value,
                subTheme: this.subThemeFilter.value,
                theme: this.themeFilter.value
            }
        }));
        this.matBottomSheetRef.dismiss();

    }

    clearFilters () {

        this.store.dispatch(setActions.updateFilters({ filters: {} }));
        this.matBottomSheetRef.dismiss();

    }

}
