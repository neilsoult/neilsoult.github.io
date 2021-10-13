import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { LegoSet } from '@interfaces';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-set-list',
    styleUrls: ['./set-list.component.scss'],
    templateUrl: './set-list.component.html'
})
export class SetListComponent {

    @Input() sets: LegoSet[] | null = [];

    @Output() edit$ = new EventEmitter<LegoSet>();

    trackById (index: number, { id }: LegoSet): string | undefined {

        return id;

    }

}
