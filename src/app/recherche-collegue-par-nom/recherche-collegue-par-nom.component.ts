import { Component, OnInit, Input } from '@angular/core';
import {tabMatricules} from '../mock/matricules.mock';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {


  affichage = false;

  tabMats: string[] = [];

  constructor() { }


  ngOnInit() {
  }

  afficherRecherche() {
  
    this.tabMats = tabMatricules;
    this.affichage = true;
    return false;
  }

}
