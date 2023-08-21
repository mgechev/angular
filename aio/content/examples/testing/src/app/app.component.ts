// #docregion
import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { TwainComponent } from './twain/twain.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterOutlet } from '@angular/router';
import { sharedImports } from './shared/shared';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    AppComponent,
    AboutComponent,
    BannerComponent,
    TwainComponent,
    WelcomeComponent,
    sharedImports,
    RouterOutlet,
  ]
})
export class AppComponent { }
