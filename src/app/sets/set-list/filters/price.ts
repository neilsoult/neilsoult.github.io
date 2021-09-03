import { LegoSet, SetFilters } from '@interfaces';

export const priceFilter = (filters: SetFilters) => {

    return ({ price }: LegoSet) => {

        // priced filter
        if (filters.priced === 'priced') {

            return !!price;

        }
        if (filters.priced === 'unpriced') {

            return !price;

        }
        return true;

    };

};
