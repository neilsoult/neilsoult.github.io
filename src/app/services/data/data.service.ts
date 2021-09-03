import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LegoSet } from '@interfaces';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {

    constructor (private firestore: AngularFirestore) { }

    addSet (set: LegoSet) {

        this.firestore.collection('set').add(set);

    }

    deleteSet (id: string) {

        this.firestore.collection('set').doc(id).delete();

    }

    getAll$ (): Observable<LegoSet[]> {

        return this.firestore.collection('set').valueChanges({ idField: 'id' }) as Observable<LegoSet[]>;

    }

    updateSet (id: string, set: LegoSet) {

        this.firestore.collection('set').doc(id).update(set);

    }

}
