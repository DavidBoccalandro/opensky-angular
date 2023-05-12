import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginForm } from '../types/login.types';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}

  login(credentials: LoginForm): Observable<string> {
    return this.http.post<string>(
      'http://localhost:3001/login',
      credentials
    );
  }
}
