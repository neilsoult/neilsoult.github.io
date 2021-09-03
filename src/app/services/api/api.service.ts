import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BRICKSET_KEY, REBRICK_KEY } from '@constants/keys';
import { shapeBricksetResponse } from '@helpers/shape-brickset-response';
import { map, switchMap } from 'rxjs/operators';
import { StorageService } from '../storage';

@Injectable({ providedIn: 'root' })
export class ApiService {

    constructor (
        private http: HttpClient,
        private storageService: StorageService
    ) { }

    brickset (setNumber: string) {

        return this.http.get<any[]>('/assets/test-data.json').pipe(map((json) => {

            return json.find((data) => {

                return data?.number === setNumber;

            });

        }));

        // const url = `https://brickset.com/api/v3.asmx/getSets?apiKey=${this.storageService.getStore(BRICKSET_KEY)}`;
        // const params = new HttpParams();

        // params.set('query', setNumber);
        // return this.http.post(url, { params });
        // const url = `https://brickset.com/api/v3.asmx/getSets`;
        // const body = {
        //     apiKey: this.storageService.getStore(BRICKSET_KEY),
        //     params: { query: setNumber }
        // };
        // return this.http.post(url, body);

    }

    import () {

        // return this.http.get<any[]>('/assets/opened-list.json').pipe(switchMap((list) => {

        //     list.reduce((prev, next, idx) => {

        //         if (prev.includes(next)) {

        //             console.log(`${next} is a dupe! (idx: ${idx})`);
        //             return prev;

        //         }
        //         return [...prev, next];

        //     }, []);
        //     const oldList = new Set(list);
        //     console.log('original list ', oldList, list.length);
        //     return this.http.get<any[]>('/assets/test-data.json').pipe(
        //         map((json) => {

        //             return json.map((item) => {

        //                 oldList.delete(+item.number);
        //                 return { ...shapeBricksetResponse(item), number: item.number, opened: false };

        //             });

        //         }),
        //         map((sets) => {

        //             console.log('sets count: ', sets.length);
        //             return { oldList: Array.from(oldList), sets };

        //         })
        //     );

        // }));

    }

    rebrickable (setNumber: string) {


        const url = `https://rebrickable.com/api/v3/lego/sets/${setNumber}`;
        const headers = new HttpHeaders({
            Accept: 'application/json',
            Authorization: `key ${this.storageService.getStore(REBRICK_KEY)}`
        });

        return this.http.get(url, { headers });

    }

}
