import { Injectable } from '@angular/core';
import {Collegue} from '../models/Collegue'; 
import {tabMatricules} from '../mock/matricules.mock';
import {collegueMock} from '../mock/collegues.mock'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public tabMatricules: string[]; 

  constructor( ) { }

  rechercherParNom(nom: string): string[]  {

    return tabMatricules; 
    // TODO retourner une liste de matricules fictifs à partir du fichier `src/app/mock/matricules.mock.ts`.  
  }

  recupererCollegueCourant(): Collegue {

    return collegueMock; 
    // TODO retourner le collègue fictif à partir du fichier `src/app/mock/collegues.mock.ts`.
  }
}
