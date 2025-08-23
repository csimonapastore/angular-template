import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from 'primeng/card';
import { ButtonComponent } from '../../atoms/button/button.component';
import { LabelComponent } from '../../atoms/label/label.component';

@Component({
  selector: 'app-card',
  imports: [
    Card,
    CommonModule,
    ButtonComponent,
    LabelComponent
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() image?: string;
  @Input() text?: string;
  @Input() confirmLabel: string = '';
  @Input() cancelLabel: string = '';
  @Input() closeLabel: string = '';
  @Input() showConfirmButton: boolean = false;
  @Input() showCancelButton: boolean = false;
  @Input() showCloseButton: boolean = false;
  @Input() confirmAction?: () => void;
  @Input() cancelAction?: () => void;
  @Input() closeAction?: () => void;

  @Output() onConfirm = new EventEmitter<void>();
  @Output() onCancel = new EventEmitter<void>();
  @Output() onClose = new EventEmitter<void>();



  handleConfirmAction() {
    if (this.confirmAction) {
      this.confirmAction();
      this.onConfirm.emit();
    }
  }
  handleCancelAction() {
    if (this.cancelAction) {
      this.cancelAction();
      this.onCancel.emit();
    }
  }
  handleCloseAction() {
    if (this.closeAction) {
      this.closeAction();
      this.onClose.emit();
    }
  }
}
