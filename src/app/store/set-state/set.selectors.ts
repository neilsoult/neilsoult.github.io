import { SetState } from '@interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getSetState = createFeatureSelector<SetState>('setState');

export const getAllSets = createSelector(getSetState, ({ sets }) => sets);
export const getError = createSelector(getSetState, ({ error }) => error);
export const getFilters = createSelector(getSetState, ({ filters }) => filters);
export const getFiltersExist = createSelector(getFilters, (filters) => !!Object.keys(filters).length);
export const getLoading = createSelector(getSetState, ({ loading }) => loading);
export const getTotalCount = createSelector(getAllSets, (sets) => sets.length);
export const getTotalPrice = createSelector(getAllSets, (sets) => {

    return sets.reduce((acc, { price }) => {

        if (price && +price) {

            return +price + acc;

        }
        return acc;

    }, 0);

});
