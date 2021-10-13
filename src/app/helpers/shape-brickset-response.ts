import { LegoSet } from '@interfaces';

export const shapeBricksetResponse = (response: any): LegoSet => {

    return {
        bricksetImage: response?.image?.imageURL || '',
        bricksetUrl: response?.bricksetURL || '',
        name: response?.name || '',
        number: response?.number || '',
        pieces: response?.pieces || '',
        subtheme: response?.subtheme || '',
        theme: response?.theme || '',
        year: response?.year || ''
    };

};
