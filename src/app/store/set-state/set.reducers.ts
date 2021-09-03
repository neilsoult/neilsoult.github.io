import { SetState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { setActions } from './set.actions';

const initialState: SetState = {
    error: '',
    filters: {},
    loading: false,
    sets: []
};

const reducer = createReducer(
    initialState,
    on(setActions.addSet, (state, { set }) => {

        return { ...state, sets: [...state.sets, set] };

    }),
    on(setActions.deleteSet, (state, { id: idToDelete }) => {

        const sets = state.sets.filter(({ id }) => {

            return idToDelete !== id;

        });
        return { ...state, sets };

    }),
    on(setActions.fetchSets, (state) => {

        return { ...state, sets: [] };

    }),
    on(setActions.updateFilters, (state, { filters }) => {

        return { ...state, filters };

    }),
    on(setActions.updateSet, (state, { id, set: newSet }) => {

        const sets = state.sets.map((set) => {

            if (id === set.id) {

                return { ...set, ...newSet };

            }
            return set;

        });
        return { ...state, sets };

    }),
    on(setActions.updateSetStore, (state, { sets }) => {

        return { ...state, sets };

    })
);

export function setReducer (state: SetState | undefined, action: Action) {

    return reducer(state, action);

}
