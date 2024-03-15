import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { Interceptor } from './core/interceptor/interceptor.interceptor';
import { provideStore } from '@ngrx/store';
import { reducers, metaReducers } from './store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    provideAnimations(),
    provideHttpClient(withInterceptors([Interceptor])),
    provideStore(reducers, { metaReducers }),
  ],
};
