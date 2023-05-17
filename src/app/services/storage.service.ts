import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  USER_KEY = 'token';
  constructor() {}

  clean(): void {
    localStorage.clear();
  }

  saveToken(token: string) {
    localStorage.removeItem(this.USER_KEY);
    localStorage.setItem(this.USER_KEY, token);
  }

  removeToken() {
    localStorage.removeItem(this.USER_KEY);
  }

  getToken() {
    const token = localStorage.getItem(this.USER_KEY);
    if (token) {
      return token;
    }

    return {};
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem(this.USER_KEY);
    return token ? true : false;
  }
}
