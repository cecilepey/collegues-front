import { Injectable } from '@angular/core';
import {Collegue} from '../models/Collegue'; 
//import {tabMatricules} from '../mock/matricules.mock';
import {collegueMock} from '../mock/collegues.mock';
import {environment} from '../../environments/environment';
import { HttpClient, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public col: Collegue; 

  private subCollegue = new Subject<Collegue>();

  private subConnecte = new BehaviorSubject(false); 

  public tabMatricules: string[]; 

  constructor( private _http:HttpClient) { }

  get subCollegueObs(): Observable<Collegue> {
    return this.subCollegue.asObservable()
  }


  get subConnecteObs(){
    return this.subConnecte.asObservable()
  }

  rechercherParNom(nom: string): Observable<string[]>  {

    const URL_BACKEND = environment.backendUrl + '/collegues?nom=' + nom;

    return this._http.get<string[]>(URL_BACKEND)

  }

  connexion(email:string, mdp : string){

    const URL_BACKEND = environment.backendUrl + '/auth';

   // const httpOptions = ;

    this._http
      .post(URL_BACKEND, {
        email : email, 
        motDePasse : mdp
      }, 
      
      {
        headers: new HttpHeaders({  "Content-Type": "application/json" }),
        withCredentials: true,
        responseType: 'text'
      }
      )
      .subscribe((data: any) => {
        this.subConnecte.next(true)
      },(error: HttpErrorResponse) => {
        console.log(error.message)
        
      });



  }


  recupererCollegueCourant(matricule: string): Observable<Collegue> {


    const URL_BACKEND = environment.backendUrl + '/collegues/' + matricule; 

    return this._http.get<Collegue>(URL_BACKEND, { withCredentials: true})
    .pipe(
        tap(col =>{
          this.subCollegue.next(col)
        })
    )

  }

}
