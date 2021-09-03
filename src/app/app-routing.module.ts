import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetListComponent } from './sets/set-list';

const routes: Routes = [
    { component: SetListComponent, path: 'list' },
    { path: '**', redirectTo: 'list' }
]

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule { }
