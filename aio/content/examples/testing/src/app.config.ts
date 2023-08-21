import {ApplicationConfig, importProvidersFrom} from '@angular/core';

import {UserService} from './app/model/user.service';
import {TwainService} from './app/twain/twain.service';
import {HeroService} from './app/model/hero.service';
import {InMemoryDataService} from './app/in-memory-data.service';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {provideRouter} from '@angular/router';
import {AboutComponent} from './app/about/about.component';
import {DashboardComponent} from './app/dashboard/dashboard.component';
import {provideHttpClient} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'about', component: AboutComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'heroes', loadChildren: () => import('./app/hero/hero.routes')},
    ]),

    provideHttpClient(),

    importProvidersFrom(
      // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
      // and returns simulated server responses.
      // Remove it when a real server is ready to receive requests.
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false})
    ),

    HeroService,
    TwainService,
    UserService,
  ],
};
