import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-button',
  imports: [Button],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() disabled: boolean = false;
  @Input() styleClass: string = '';
  @Input() action?: () => unknown | void;

  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    if (this.action) {
      this.action();
    }
    this.onClick.emit();
  }
}
