import { Inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {

    private isSupported = false;
    private storage: Storage;

    constructor (@Inject('Window') window: Window) {

        this.storage = window.localStorage;
        try {

            if (this.storage != null) {

                this.storage.setItem('TEST', '"TEST"');
                this.storage.removeItem('TEST');
                this.isSupported = true;

            }

        } catch { }

    }

    getStore<T> (key: string): T | null {

        if (!this.isSupported) {

            return null;

        }
        try {

            return JSON.parse(this.storage.getItem(key) as string);

        } catch {

            return null;

        }
    }

    removeStore (key: string) {

        if (this.isSupported) {

            try {

                this.storage.removeItem(key);

            } catch { }

        }

    }

    setStore (key: string, value: any): boolean {

        if (!this.isSupported) {

            return false;

        }

        value = value != null ? JSON.stringify(value) : null;

        try {

            this.storage.setItem(key, value);

        } catch {

            return false;

        }

        return true;
    }

}
