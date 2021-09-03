import { SetFilters } from './set-filters';
import { LegoSet } from '../lego-set';

export interface SetState {
    error: string;
    filters: SetFilters;
    loading: boolean;
    sets: LegoSet[]
}
