import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, map, of } from 'rxjs';
import { AuthenticationData } from '../models/request/authentication-data';
import { environment } from '../../assets/config/environment';
import { AuthenticatedUser } from '../models/response/authentication-data';


@Injectable({
  providedIn: 'root'
})
export class MockService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor() { 
    // const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    // this.isAuthenticatedSubject.next(isAuthenticated);
  }

  

  authenticate(data?: AuthenticationData): Observable<boolean> {
    if (!data) {
      return of(false).pipe(delay(500));
    }

    return of(data).pipe(
      delay(500),
      map(credentials => {
        const users = environment.mockData?.authenticationData?.users || [];
        const match = users.find(u =>
          u?.request?.data?.email === credentials.email &&
          u?.request?.data?.password === credentials.password
        );

        const isValid = !!match;

        if (isValid) {
          // mark authenticated and store the mocked user response for later use
          localStorage.setItem('isAuthenticated', 'true');
          try {
            localStorage.setItem('authUser', JSON.stringify(match?.response?.data ?? null));
          } catch (e) {
            // ignore storage errors in environments where localStorage isn't available
          }
          this.isAuthenticatedSubject.next(true);
        }

        return isValid;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('isAuthenticated');
    this.isAuthenticatedSubject.next(false);
  }
}
