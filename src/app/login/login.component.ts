import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor(private dataService: DataService) { }

  connexion(email: string, mdp: string) {

    this.dataService.connexion(email, mdp)

    return false;

  }

  ngOnInit() {
  }



}
