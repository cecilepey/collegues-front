import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.css']
})
export class MenuComponentComponent implements OnInit {

  constructor(private dataService: DataService) { }

  afficherPhotos(){
    this.dataService.rechercherPhotos();
  }

  ngOnInit() {
  }

}
