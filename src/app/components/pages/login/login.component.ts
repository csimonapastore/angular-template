import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Card } from 'primeng/card';
import { ButtonComponent } from '../../atoms/button/button.component';
import { LabelComponent } from '../../atoms/label/label.component';
import { InputLabelComponent } from '../../molecules/input-label/input-label.component';
import { AuthService } from '../../../services/auth.service';
import { Subscription } from 'rxjs';
import { AuthenticationData, AuthenticationDataRequest } from '../../../models/request/authentication-data';
import { AuthenticationForm } from '../../../models/common/authentication-form';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    Card,
    ButtonComponent,
    InputLabelComponent,
    LabelComponent,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private authService = inject(AuthService);
  private messageService = inject(MessageService);
  private subscription = new Subscription();

  public authenticationData: AuthenticationData = {
    email: '',
    password: ''
  };

  public authenticationForm: AuthenticationForm = {
    email: '',
    password: ''
  };

  ngOnInit() {
    // Se l'utente è già autenticato, lo reindirizziamo alla home
    this.authService.authenticate().subscribe(isAuth => {
      if (isAuth) {
        this.router.navigate(['/']);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // Binding della funzione nel costruttore per mantenere il contesto
  public onLogin = () => {
    if (!this.authenticationForm.email || !this.authenticationForm.password) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Email and password are required',
        life: 3000
      });
      return;
    }

    this.authenticationData.email = this.authenticationForm.email;
    this.authenticationData.password = this.authenticationForm.password;
    const request = {
      data : this.authenticationData
    } as AuthenticationDataRequest;

    this.authService.authenticate(request).subscribe({
      next: (success) => {
        if (success) {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Login successful',
            life: 3000
          });
          this.router.navigate(['/']);
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Invalid credentials',
            life: 3000
          });
        }
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'An error occurred during login',
          life: 3000
        });
      }
    });
  }
}
