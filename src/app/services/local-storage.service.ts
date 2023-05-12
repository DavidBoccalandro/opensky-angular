import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storage = localStorage;

  setItem(key: string, value: unknown) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string) {
    this.storage.getItem(key);
  }
}
