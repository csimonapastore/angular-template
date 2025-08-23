import { Component, Input } from '@angular/core';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputTextModule } from 'primeng/inputtext';
import { keyfilter } from '../../../utils/keyfilter';
import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-input',
  imports: [CommonModule, KeyFilterModule, InputTextModule, PasswordModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() keyFilter: keyfilter = 'alphanum';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() styleClass: string = '';
  @Input() id: string = '';
  @Input() ariaDescribedby: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
}
