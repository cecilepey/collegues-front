import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './app-collegue.component.html',
  styleUrls: ['./app-collegue.component.css']
})
export class AppCollegueComponent implements OnInit {

  @Input() col: Collegue; 

  affichage: boolean = false; 

  constructor() { }

  creerNouveauCollegue(){
    console.log('créer un nouveau collègue'); 
  }
  
  modifierCollegue(){
    this.affichage = true; 
  }

  ngOnInit() {
  }

}
