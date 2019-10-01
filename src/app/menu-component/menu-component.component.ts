import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.css']
})
export class MenuComponentComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  afficherPhotos(){
    this.dataService.rechercherPhotos();
  }

  ngOnInit() {
  }

  deconnexion(){
    this.dataService.deconnexion().subscribe(
      ()=> {this.router.navigate(['login'])},
      err => {

      }
    )
  }

}
