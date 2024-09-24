import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from '@app/app.component';
import { provideRouter, withRouterConfig } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { MessageService } from 'primeng/api';
import {routes} from './app/routes';
import { ButtonModule } from 'primeng/button';

import { HomeComponent } from '@components/views/home/home.component';


// Componente principal


bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    importProvidersFrom(HttpClientModule),
    MessageService,
    provideRouter(routes),
    ButtonModule,
  ],
  }).catch((err) => console.error(err));
