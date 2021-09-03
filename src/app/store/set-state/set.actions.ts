import { LegoSet, SetFilters } from '@interfaces';
import { createAction, props } from '@ngrx/store';

const addSet = createAction('[APP] Add Set', props<{ set: LegoSet }>());
const deleteSet = createAction('[APP] Delete Set', props<{ id: string }>());
const fetchSets = createAction('[APP] Fetch Sets');
const init = createAction('[APP] Init');
const updateFilters = createAction('[APP] Update Filters', props<{ filters: SetFilters }>());
const updateSet = createAction('[APP] Update Set', props<{ id: string, set: LegoSet }>());
const updateSetStore = createAction('[APP] Update Set Store', props<{ sets: LegoSet[] }>());
const updateStorage = createAction('[APP] Update Storage');

export const setActions = {
    addSet, deleteSet,
    fetchSets, init,
    updateFilters, updateSet, updateSetStore, updateStorage
};
