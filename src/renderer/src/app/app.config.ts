import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './features/tamagotchi/tamagotchi.routes';
import { MonsterApi } from './core/api/monster.api';
import { MonsterHttpApiService } from './core/api/monter-http.api';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true, runCoalescing: true }),
    provideRouter(routes, withHashLocation()),
    provideHttpClient(),
    { provide: MonsterApi, useClass: MonsterHttpApiService },
  ],
};
