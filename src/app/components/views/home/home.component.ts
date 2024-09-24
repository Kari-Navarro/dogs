import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, provideRouter } from '@angular/router';
import { routes } from '../../../routes';
import { LoginComponent } from '@components/organism/login/login.component';
import { DogsComponent } from '../dogs/dogs.component';
import { of, map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [RouterModule, CommonModule, LoginComponent, DogsComponent],
})
export class HomeComponent {}

// bootstrapApplication(LoginComponent,{
//   providers: [provideRouter(routes)]
// })



of(1,2,3).pipe(map((x)=>x*x)).subscribe((v)=>console.log(`value: ${v}`))



