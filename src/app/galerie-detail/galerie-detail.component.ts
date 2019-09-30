import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-galerie-detail',
  templateUrl: './galerie-detail.component.html',
  styleUrls: ['./galerie-detail.component.css']
})
export class GalerieDetailComponent implements OnInit {

  matricule: string;

  collegueSelectionne: Collegue = new Collegue('', '', '', null, ''); 

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
 
       this.matricule = params.get('matricule');

       this.dataService.recupererCollegueCourant(this.matricule).subscribe(
          col => {
           this.collegueSelectionne = col; 
         } )
        
       }
    )}

  }
