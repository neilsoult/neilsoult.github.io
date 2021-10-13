import { LegoSet, SetFilters } from '@interfaces';

export const openedFilter = (filters: SetFilters) => {

    return ({ opened }: LegoSet) => {

        // opened filter
        if (filters.opened === 'opened') {

            return opened === true;

        }
        if (filters.opened === 'unopened') {

            return opened === false;

        }
        return true;

    };

};
