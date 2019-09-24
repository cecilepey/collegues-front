import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService} from '../services/data.service'


@Component({
  selector: 'app-collegue',
  templateUrl: './app-collegue.component.html',
  styleUrls: ['./app-collegue.component.css']
})
export class AppCollegueComponent implements OnInit {

 col: Collegue; 

  affichage: boolean = false; 

  constructor(private dataService: DataService) { 
    
  }

  creerNouveauCollegue(){
    console.log('créer un nouveau collègue'); 
  }
  
  modifierCollegue(){
    this.affichage = true; 
  }


  ngOnInit() {
   this.col = this.dataService.recupererCollegueCourant(); 
  }

}
