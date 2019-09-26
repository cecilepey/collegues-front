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

  affichage: boolean = true; 

  modification: boolean = false;

  creation: boolean = false; 

  actionSub:Subscription

  col: Collegue = new Collegue('', '', '', null, '', '');

  erreurModif = null; 

  erreurCreation = null; 

  constructor(private dataService: DataService) {

  }

  creerNouveauCollegue() {
    this.affichage= false; 
    this.creation = true; 
    
  }

  modifierCollegue() {
    this.affichage = false; 
    this.modification = true;
  }

  envoieModifCollegue( collegue: Collegue){
    this.dataService.modifierCollegue(collegue)
    .subscribe(col => {
      this.modification = false; 
      this.affichage = true; 
    }, err =>{
      this.erreurModif = err.error
    });
  
    
  }

  creerCollegue(nom: string, prenoms: string, dateDeNaissance: string, email: string, photoUrl: string){

    this.creation = false; 

    

   const collegue = new Collegue(nom, prenoms, email, new Date(dateDeNaissance), photoUrl)

   this.dataService.creerCollegue(collegue).subscribe( result =>{
  
    this.creation = true; 

   }, err =>{
     this.erreurCreation = err.error; 

   })
  }


  ngOnInit() {
   this.actionSub = this.dataService.subCollegueObs.subscribe(collegue => {
      this.col = collegue
      this.creation = false; 
      this.affichage = true; 
    }, err => { })
  }

  ngOnDestroy(): void {
     this.actionSub.unsubscribe();
    
  }

}
