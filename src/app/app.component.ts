import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="btn-group btn-group-toggle">
  <label class="btn-primary" ngbButtonLabel>
    <input type="checkbox" ngbButton [(ngModel)]="model.left"> NG bootstrap 
  </label>
  </div>
  <hr>
  <pre>{{model | json}}</pre>
    

  <button type="button" class="btn btn-secondary">bootstrap</button>
  `,
  styles: []
})
export class AppComponent {
  title = 'collegues-front';
}
