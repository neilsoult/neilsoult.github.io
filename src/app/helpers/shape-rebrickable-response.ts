import { LegoSet } from '@interfaces';

export const shapeRebrickableResponse = (response: any): Partial<LegoSet> => {

    return {
        rebrickableImage: response?.set_img_url,
        rebrickableUrl: response?.set_url
    };

};
