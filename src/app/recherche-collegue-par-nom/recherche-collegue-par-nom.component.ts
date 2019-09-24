import { Component, OnInit, Input } from '@angular/core';
import { DataService} from '../services/data.service'

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
  
    this.tabMats = this.dataService.rechercherParNom(nom); 
    this.affichage = true;
    return false;
  }

}
