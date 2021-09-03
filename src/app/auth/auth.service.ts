import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {

    user$ = this.fireAuth.user;

    constructor (private fireAuth: AngularFireAuth) { }

    login (email: string, password: string) {

        return this.fireAuth.signInWithEmailAndPassword(email, password);

    }

}
