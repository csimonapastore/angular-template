import { Component, Input, Output, EventEmitter } from '@angular/core';
import { InputComponent } from '../../atoms/input/input.component';
import { LabelComponent } from '../../atoms/label/label.component';
import { CommonModule } from '@angular/common';
import { keyfilter } from '../../../utils/keyfilter';

@Component({
  selector: 'app-input-label',
  standalone: true,
  imports: [CommonModule, InputComponent, LabelComponent],
  templateUrl: './input-label.component.html',
  styleUrl: './input-label.component.scss'
})
export class InputLabelComponent {
  @Input() labelText: string = '';
  @Input() labelStyleClass: string = '';

  @Input() inputId: string = '';
  @Input() inputType: 'text' | 'password' = 'text';
  @Input() inputKeyFilter: keyfilter = 'alphanum';
  @Input() inputPlaceholder: string = '';
  @Input() inputStyleClass: string = '';
  @Input() ariaDescribedby: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onValueChange(value: string) {
    console.log('InputLabelComponent - onValueChange:', { value });
    this.value = value;
    this.valueChange.emit(value);
  }

}
