import { LegoSet, SetFilters } from '@interfaces';

export const nameFilter = (filters: SetFilters) => {

    return ({ name }: LegoSet) => {

        // name search/filter
        if (filters.name) {

            return name?.toLowerCase().includes(filters.name.toLowerCase());

        }
        return true;

    };

};
