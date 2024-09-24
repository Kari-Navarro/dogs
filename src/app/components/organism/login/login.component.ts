import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '@components/molecules/form/form.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormComponent],
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent {

}
