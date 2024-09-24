import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '@components/atoms/input/input.component';
import { FormControl, Validators } from '@angular/forms';
import { LabelComponent } from '@components/atoms/label/label.component';
import { ButtonComponent } from '@components/atoms/button/button.component';
import { Router } from '@angular/router';

//En esta parte del formulario van las validaciones del formulario

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, InputComponent, LabelComponent, ButtonComponent],
  templateUrl: './form.component.html',
  styleUrls: [],
})
export class FormComponent {
  label: string = '';
  // formUser = new FormGroup({
  //   'name':new FormControl('', Validators.required),
  //   'password': new FormControl('',[Validators.required, Validators.minLength(8)])
  // });

  name = new FormControl('', Validators.required);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);

  constructor(private router: Router) {}

  submit() {
    this.router.navigate(['dogs']);
  }
}
