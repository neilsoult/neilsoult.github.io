import { LegoSet } from './lego-set';

export interface SetDialogData {
    enableDelete: boolean;
    set: Partial<LegoSet>;
}
