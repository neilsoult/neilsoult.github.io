import { LegoSet } from '@interfaces';

export const shapeBricksetResponse = (response: any): Partial<LegoSet> => {

    return {
        bricksetImage: response?.image?.imageURL || '',
        bricksetUrl: response?.bricksetURL || '',
        name: response?.name || '',
        pieces: response?.pieces || '',
        subtheme: response?.subtheme || '',
        theme: response?.theme || '',
        year: response?.year || ''
    };

};
