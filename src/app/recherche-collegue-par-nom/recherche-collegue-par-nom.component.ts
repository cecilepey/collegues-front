import { Component, OnInit, Input } from '@angular/core';
import { DataService} from '../services/data.service'
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {



  affichage = false;

  tabMats: string[] = [];

  constructor(private dataService : DataService) { }


  ngOnInit() {
  }

  afficherRecherche(nom: string) {
  
   this.dataService.rechercherParNom(nom).subscribe(data =>  {
     this.tabMats = data;
     this.affichage = true;
    }, err => {console.log(err.message)}); 
    
    return false;
  }

  recupererCollegueCourant(matricule: string) {
 
    this.dataService.recupererCollegueCourant(matricule)
    .subscribe(data =>{
    }, err =>{ console.log(err.message)

    });
  }

  

}
