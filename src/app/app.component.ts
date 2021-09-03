import { Component, OnInit } from '@angular/core';
import { AppState } from '@interfaces';
import { Store } from '@ngrx/store';
import { setActions } from '@store/set-state/set.actions';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor (private store: Store<AppState>) { }

    ngOnInit () {

        this.store.dispatch(setActions.init());

    }

}
