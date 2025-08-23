import { Component, Input } from '@angular/core';
import { InputComponent } from '../../atoms/input/input.component';
import { LabelComponent } from '../../atoms/label/label.component';
import { CommonModule } from '@angular/common';
import { keyfilter } from '../../../utils/keyfilter';

@Component({
  selector: 'app-input-label',
  imports: [CommonModule, InputComponent, LabelComponent],
  templateUrl: './input-label.component.html',
  styleUrl: './input-label.component.scss'
})
export class InputLabelComponent {
  @Input() labelText: string = '';
  @Input() labelStyleClass: string = '';


  @Input() inputId: string = '';
  @Input() inputType: keyfilter = 'alphanum';
  @Input() inputPlaceholder: string = '';
  @Input() inputStyleClass: string = '';
  @Input() ariaDescribedby: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;

}
