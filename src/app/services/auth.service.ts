import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { BaseUser, LoginRequest, LoginResponse, User } from '../models/user';
import { StorageService } from './storage.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService
  ) {}

  register(user: User): Observable<BaseUser> {
    return this.httpClient.post<User>(`${environment().apiURL}/register`, user);
  }

  login(user: LoginRequest): Observable<LoginResponse> {
    return this.httpClient
      .post<LoginResponse>(`${environment().apiURL}/login`, user)
      .pipe(
        tap((res: LoginResponse) => this.storageService.saveToken(res.token))
      );
  }

  logout() {
    this.storageService.removeToken();
  }
}
