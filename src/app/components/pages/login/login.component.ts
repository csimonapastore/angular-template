import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Card } from 'primeng/card';
import { ButtonComponent } from '../../atoms/button/button.component';
import { LabelComponent } from '../../atoms/label/label.component';
import { InputLabelComponent } from '../../molecules/input-label/input-label.component';

@Component({
  selector: 'app-login',
  imports: [
    Card,
    ButtonComponent,
    InputLabelComponent,
    LabelComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private router = inject(Router);
  // private messageService = inject(MessageService);

  ngOnInit() {
    // Initialization logic here
  }

  onLogin() {
    // Implement login logic here
    console.log('Login button clicked');
  }
}
