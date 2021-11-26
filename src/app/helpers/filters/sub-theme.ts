import { LegoSet, SetFilters } from '@interfaces';

export const subThemeFilter = (filters: SetFilters) => {

    return ({ subtheme }: LegoSet) => {

        // name search/filter
        if (filters.subTheme) {

            return subtheme?.toLowerCase().includes(filters.subTheme.toLowerCase());

        }
        return true;

    };

};
