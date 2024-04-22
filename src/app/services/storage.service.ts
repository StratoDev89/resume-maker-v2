import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private storageVariables = [
    'header',
    'summary',
    'workExperience',
    'education',
    'certifications',
    'awards',
    'languages',
    'references',
    'additionalInformation',
  ];

  setStorage(storageVariable: string, payload: any) {
    localStorage.setItem(storageVariable, JSON.stringify(payload));
    window.dispatchEvent( new Event('storage') )
  }

  getStorage(storageVariable: string) {
    const storage = localStorage.getItem(storageVariable);
    if (storage) {
      return JSON.parse(storage);
    }
    return null;
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
}
