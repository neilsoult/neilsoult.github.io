import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BulkAddComponent } from './bulk-add';
import { HomeComponent } from './home';
import { SetListComponent } from './sets/set-list';

const routes: Routes = [
    { canActivate: [AuthGuard], component: BulkAddComponent, path: 'bulk-add' },
    { component: HomeComponent, path: 'home' },
    { path: '**', redirectTo: 'home' }
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
