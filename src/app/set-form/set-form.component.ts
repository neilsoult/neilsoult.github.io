import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LegoSet } from '@interfaces';
import { ApiService } from '../api.service';
import { shapeBricksetResponse } from '../helpers/shape-brickset-response';

@Component({
    selector: 'app-set-form',
    styleUrls: ['./set-form.component.scss'],
    templateUrl: './set-form.component.html'
})
export class SetFormComponent implements OnInit {

    @Input() editSet: Partial<LegoSet> = {};

    @Output() saveSet = new EventEmitter<LegoSet>();

    setForm = this.formBuilder.group({
        bricksetImage: '',
        bricksetUrl: '',
        name: '',
        number: [null, [Validators.required]],
        opened: [false, []],
        pieces: '',
        price: '',
        rebrickableImage: '',
        rebrickableUrl: '',
        subtheme: '',
        theme: '',
        value: '',
        year: ''
    });

    constructor (
        private apiService: ApiService,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit () {

        if (this.editSet) {

            this.setForm.patchValue(this.editSet);

        }

    }

    import (source: 'brickset' | 'rebrickable') {

        if (source === 'brickset') {

            this.apiService.brickset(this.editSet.number as string).subscribe((response) => {

                this.setForm.patchValue(shapeBricksetResponse(response));

            });

        }

    }

    submit () {

        if (this.setForm.valid) {

            this.saveSet.emit(this.setForm.value);

        }

    }

}
