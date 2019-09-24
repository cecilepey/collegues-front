import { Component } from '@angular/core';
import { collegueMock } from './mock/collegues.mock';

@Component({
  selector: 'app-root',
  template: `

  <div class="container-fluid mt-3">

  <div class="row">
      <div class="col-5">
        <app-recherche-collegue-par-nom></app-recherche-collegue-par-nom>
        </div>
   

        <div class="col-7">
        <app-collegue [col]="c1"></app-collegue>
        </div>
        </div>
        </div>
 
  `,
  styles: []
})
export class AppComponent {
  title = 'collegues-front';
  c1 = collegueMock;



}
