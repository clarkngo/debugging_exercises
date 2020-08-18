// main.ts specified in angular.json as "main"
// main.ts entry-point for our app and it bootstaps our application

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// bootstrap process loads an Angular module (in this case AppModule)
// We use AppModule specifies which component to use as the top-level component
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

