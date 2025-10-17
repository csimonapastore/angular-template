import { Component, Input, Output, EventEmitter } from '@angular/core';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputTextModule } from 'primeng/inputtext';
import { keyfilter } from '../../../utils/keyfilter';
import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule, KeyFilterModule, InputTextModule, PasswordModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() keyFilter: keyfilter = 'alphanum';
  @Input() type: 'text' | 'password' = 'text';
  @Input() placeholder: string = '';
  @Input() styleClass: string = '';
  @Input() id: string = '';
  @Input() ariaDescribedby: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onInputChange(event: any) {
    console.log(event)
    let value = '' 
    switch(typeof event) {
      case 'string':
        value = event;
        break;
      case 'number':
        value = event.toString();
        break;
      case 'object':
        if (event && event.target) {
          value = event.target.value;
        }
        break;
    }
    console.log('InputComponent - onInputChange:', { value, type: this.type });
    this.valueChange.emit(value);
  }
}
