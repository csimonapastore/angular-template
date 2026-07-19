import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, map, of } from 'rxjs';
import { AuthenticationDataRequest } from '../models/request/authentication-data';
import { environment } from '../../assets/config/environment';
import { MockService } from './mock.service';

interface AuthenticationData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  private _mockService: MockService = new MockService();

  constructor() { 
    // const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    // this.isAuthenticatedSubject.next(isAuthenticated);
  }

  

  authenticate(data?: AuthenticationDataRequest): Observable<boolean> {
    if (!data) {
      return of(false).pipe(delay(500));
    }

    const credentialsData = data.data;
    let isValid = false

    if (environment.isMockEnabled) {
      // Mock service already returns Observable<boolean> and manages localStorage/subject
      console.log('AuthService - authenticate - using mock authentication');
      return this._mockService.authenticate(credentialsData);
    }

    if (isValid) {
      localStorage.setItem('isAuthenticated', 'true');
      this.isAuthenticatedSubject.next(true);
    }

    return of(isValid).pipe(delay(500));
  }

  logout(): void {
    localStorage.removeItem('isAuthenticated');
    this.isAuthenticatedSubject.next(false);
  }
}
