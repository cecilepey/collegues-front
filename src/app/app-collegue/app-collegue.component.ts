import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service'
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-collegue',
  templateUrl: './app-collegue.component.html',
  styleUrls: ['./app-collegue.component.css']
})
export class AppCollegueComponent implements OnInit {


  actionSub:Subscription

  col: Collegue = new Collegue('', '', '', '', null, '');

  affichage: boolean = false;

  constructor(private dataService: DataService) {

  }

  creerNouveauCollegue() {
    console.log('créer un nouveau collègue');
  }

  modifierCollegue() {
    this.affichage = true;
  }




  ngOnInit() {
   this.actionSub = this.dataService.subCollegueObs.subscribe(collegue => {
      this.col = collegue
    }, err => { console.log(err.message)})
  }

  ngOnDestroy(): void {
     this.actionSub.unsubscribe();
    
  }

}
