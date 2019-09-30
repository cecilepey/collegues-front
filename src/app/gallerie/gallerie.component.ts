import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  tabCollegue: Collegue[]; 

  collegueSelectionne: Collegue; 

  constructor(private dataService: DataService) { }
  

  ngOnInit() {
    this.dataService.rechercherPhotos().subscribe(col =>{
      this.tabCollegue = col; 
     
    })
  }

  
  

}
