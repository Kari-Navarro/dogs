import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { FormComponent } from '@components/molecules/form/form.component';
import { LoginComponent } from '@components/organism/login/login.component';
import { HomeComponent } from '@components/views/home/home.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterModule, ToastModule, FormComponent, LoginComponent, HomeComponent],
})
export class AppComponent  {
  title = 'Login';
}
