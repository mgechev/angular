// #docregion
import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Hero} from '../model/hero';
import {sharedImports} from '../shared/shared';
import {UpperCasePipe} from '@angular/common';

// #docregion component
@Component({
  standalone: true,
  selector: 'dashboard-hero',
  template: `
    <button type="button" (click)="click()" class="hero">
      {{ hero.name | uppercase }}
    </button>
    `,
  styleUrls: ['./dashboard-hero.component.css'],
  imports: [sharedImports, UpperCasePipe],
})
// #docregion class
export class DashboardHeroComponent {
  @Input() hero!: Hero;
  @Output() selected = new EventEmitter<Hero>();
  click() {
    this.selected.emit(this.hero);
  }
}
// #enddocregion component, class
