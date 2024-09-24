import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputTextModule],
  templateUrl: './input.component.html',
  styleUrls: []
})
export class InputComponent {

  @Input() placeholder: string = '';
  @Input() type:string ="";
  @Input() control!:FormControl;


}
