import { LegoSet, SetFilters } from '@interfaces';

export const setNumberFilter = (filters: SetFilters) => {

    return ({ number }: LegoSet) => {

        // setNumber filter
        if (filters.setNumber) {

            return number === filters.setNumber;

        }
        return true;

    };

};
