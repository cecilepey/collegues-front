import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `

 
  <div class="container-fluid">
  
    <app-menu-component></app-menu-component>

    <router-outlet></router-outlet>
    
  </div>

  `,
  styles: []
})
export class AppComponent {

  actionSub: Subscription

  title = 'collegues-front';

  connecte: boolean;

  constructor(private dataService: DataService) {
    this.actionSub = this.dataService.subConnecteObs.subscribe(result => { this.connecte = result })
  }

  ngOnDestroy(): void {
    this.actionSub.unsubscribe()
  }

}
