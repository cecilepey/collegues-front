import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor(private dataService: DataService, private router: Router) { }

  connexion(email: string, mdp: string) {

    this.dataService.connexion(email, mdp).subscribe(
      ()=>{ this.router.navigate(['accueil'])

}, err => err
    )
    


  }

  ngOnInit() {
  }



}
