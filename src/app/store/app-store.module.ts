import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { SetEffects } from './set-state/set.effects';
import { setReducer } from './set-state/set.reducers';
import { EffectsModule, } from '@ngrx/effects';

@NgModule({
    imports: [
        EffectsModule.forRoot([SetEffects]),
        StoreModule.forRoot({ setState: setReducer })
    ]
})
export class AppStoreModule { }
