import { LegoSet, SetFilters } from '@interfaces';

export const themeFilter = (filters: SetFilters) => {

    return ({ theme }: LegoSet) => {

        // name search/filter
        if (filters.theme) {

            return theme?.toLowerCase().includes(filters.theme.toLowerCase());

        }
        return true;

    };

};
