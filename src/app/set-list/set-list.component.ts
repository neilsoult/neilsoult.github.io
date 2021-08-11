import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { LegoSet, SetDialogResult } from '@interfaces';
import { Observable, of } from 'rxjs';
import { SetDialogComponent } from '../set-dialog';
// import { take } from 'rxjs/operators';
// import { ApiService } from '../api.service';
// import { JsonDialogComponent } from '../json-dialog';

@Component({
    styleUrls: ['./set-list.component.scss'],
    templateUrl: './set-list.component.html'
})
export class SetListComponent {

    sets = this.firestore.collection('set').valueChanges({ idField: 'id' }) as Observable<LegoSet[]>;

    constructor (
        // private apiService: ApiService,
        private dialog: MatDialog,
        private firestore: AngularFirestore
    ) { }

    import () {

        // this.apiService.import().pipe(take(1)).subscribe(({ oldList, sets }) => {

        //     console.log('Old List: ', oldList);
        //     console.log('Sets: ', sets);
        //     sets.forEach((set) => {

        //         this.firestore.collection('set').add(set);

        //     });
        //     this.dialog.open(JsonDialogComponent, { data: { json$: of(oldList) }, width: '800px' });
        // this.firestore.collection('set', (ref) => {

        //     return ref.where("number", "!=", "40451");

        // })
        //     .valueChanges({ idField: 'id' }).pipe(take(1)).subscribe((items) => {

        //         // console.log('item', item);
        //         items.forEach((item: any) => {

        //             console.log('item', item.id, item.number);
        //             this.firestore.collection('set').doc(item.id).delete();

        //         });

        //     })

        // });

    }

    onEdit (set: LegoSet) {

        this.dialog.open(SetDialogComponent, { data: { set, enableDelete: true }, width: '540px' })
            .afterClosed().subscribe((result: SetDialogResult | undefined) => {

                console.log('closed!', result?.set);
                if (result?.set) {

                    this.firestore.collection('set').doc(set.id).update(result.set);

                } else if (result?.delete) {

                    this.firestore.collection('set').doc(set.id).delete();

                }

            });

    }

    newSet () {

        this.dialog.open(SetDialogComponent, { data: { set: {} }, width: '540px' })
            .afterClosed().subscribe(({ set }: SetDialogResult) => {

                this.firestore.collection('set').add(set);

            });

    }

    trackById (index: number, { id }: any) {

        return id;

    }

}
