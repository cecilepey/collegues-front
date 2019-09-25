import { Component } from '@angular/core';
import { collegueMock } from './mock/collegues.mock';
import { DataService } from './services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `

  <div class="container-fluid mt-3">

  <div class="row" *ngIf="connecte === false;">
    <div class="mx-auto mt-5">
      <app-login ></app-login>
    </div>
  </div>
  <div class="row mt-5" *ngIf="connecte === true;">
      <div class="col-5">
        <app-recherche-collegue-par-nom></app-recherche-collegue-par-nom>
      </div>
      <div class="col-7">
        <app-collegue ></app-collegue>
      </div>
    </div>
  </div>
 
  `,
  styles: []
})
export class AppComponent {

  actionSub: Subscription

  title = 'collegues-front';

  connecte: boolean; 

  constructor(private dataService: DataService){
    this.actionSub = this.dataService.subConnecteObs.subscribe(result =>{ this.connecte = result})
  }

  ngOnDestroy(): void {
    this.actionSub.unsubscribe()
  }

}
