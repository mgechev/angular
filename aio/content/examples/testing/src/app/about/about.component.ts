// #docregion
import { Component } from '@angular/core';
import { sharedImports } from '../shared/shared';
import { TwainComponent } from '../twain/twain.component';

@Component({
  standalone: true,
  imports: [sharedImports, TwainComponent],
  template: `
  <h2 highlight="skyblue">About</h2>
  <h3>Quote of the day:</h3>
  <twain-quote></twain-quote>
  `
})
export class AboutComponent { }
