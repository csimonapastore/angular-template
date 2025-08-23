import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

type HtmlTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

@Component({
  selector: 'app-label',
  imports: [CommonModule],
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss'
})

export class LabelComponent {
  @Input() text: string = '';
  @Input() styleClass: string = '';

  get tag(): HtmlTag {
    const classes = this.styleClass?.split(' ') || [];

    // Check for specific classes to determine the tag
    if (classes.includes('h1')) return 'h1';
    if (classes.includes('h2')) return 'h2';
    if (classes.includes('h3')) return 'h3';
    if (classes.includes('h4')) return 'h4';
    if (classes.includes('h5')) return 'h5';
    if (classes.includes('h6')) return 'h6';
    if (classes.includes('p')) return 'p';
    if (classes.includes('span')) return 'span';

    // Default
    return 'span';
  }
}
