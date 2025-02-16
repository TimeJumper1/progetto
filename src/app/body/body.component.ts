import { Component } from '@angular/core';

@Component({
  selector: 'app-body',

  styleUrls: ['./body.component.scss'],
  template: `
    <h2>proiezionando insieme</h2>
    <ng-content></ng-content>
  `
})
export class BodyComponent {

}
