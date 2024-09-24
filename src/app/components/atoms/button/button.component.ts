import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './button.component.html',
  styleUrls: []
})
export class ButtonComponent {
  @Input() textButton:string = '';
  @Input() disabled: boolean = false;
  @Input() type: string = '';
  @Input() routerLink:string = '';



}
