import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, map, of } from 'rxjs';

interface AuthenticationData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly MOCK_EMAIL = 'admin@email.it';
  private readonly MOCK_PASSWORD = 'admin';

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
        const isValid = credentials.email === this.MOCK_EMAIL && credentials.password === this.MOCK_PASSWORD;
        
        if (isValid) {
          localStorage.setItem('isAuthenticated', 'true');
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
