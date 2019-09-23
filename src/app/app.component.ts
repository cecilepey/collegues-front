import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="btn-group btn-group-toggle">
  <label class="btn-success" ngbButtonLabel>
    <input type= "checkbox" ngbButton> NG bootstrap 
  </label>
  </div>
 
    

  <button type="button" class="btn btn-secondary">bootstrap</button>
  `,
  styles: []
})
export class AppComponent {
  title = 'collegues-front';
}
