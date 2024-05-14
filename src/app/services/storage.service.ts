import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private storageVariables = [
    'header',
    'summary',
    'experience',
    'education',
    'certifications',
    'awards',
    'languages',
    'references',
    'additional',
  ];

  setStorage(storageVariable: string, payload: any) {
    localStorage.setItem(storageVariable, JSON.stringify(payload));
    window.dispatchEvent(new Event('storage'));
  }

  getStorage(storageVariable: string) {
    const storage = localStorage.getItem(storageVariable);
    if (storage) {
      return JSON.parse(storage);
    }
    return '';
  }

  remove(storageVariable: string) {
    localStorage.removeItem(storageVariable);
  }

  clearStorage() {
    this.storageVariables.forEach((item) => {
      this.remove(item);
      location.reload();
    });
  }

  getAllStorage() {
    const allStorage: { [key: string]: any } = {};

    this.storageVariables.forEach((key) => {
      const item = localStorage.getItem(key);
      if (item) {
        allStorage[key] = JSON.parse(item);
      }
    });
    return allStorage;
  }
}
