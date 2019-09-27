import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
//import {tabMatricules} from '../mock/matricules.mock';
import { collegueMock } from '../mock/collegues.mock';
import { environment } from '../../environments/environment';
import { HttpClient, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable, Subject, BehaviorSubject, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public collegueCache: Collegue[];

  public col: Collegue;

  private subCollegue = new Subject<Collegue>();

  private subConnecte = new BehaviorSubject(false);

  private subEmail = new Subject<ValidationErrors>(); 

  public tabMatricules: string[];

  constructor(private _http: HttpClient) { }

  get subCollegueObs(): Observable<Collegue> {
    return this.subCollegue.asObservable()
  }

  get subEmailObs(): Observable<ValidationErrors>{
    return this.subEmail.asObservable()
  }

  get subConnecteObs() {
    return this.subConnecte.asObservable()
  }

  rechercherParNom(nom: string): Observable<string[]> {

    const URL_BACKEND = environment.backendUrl + '/collegues?nom=' + nom;

    return this._http.get<string[]>(URL_BACKEND)

  }

  connexion(email: string, mdp: string) {

    const URL_BACKEND = environment.backendUrl + '/auth';

    // const httpOptions = ;

    this._http
      .post(URL_BACKEND, {
        email: email,
        motDePasse: mdp
      },

        {
          headers: new HttpHeaders({ "Content-Type": "application/json" }),
          withCredentials: true,
          responseType: 'text'
        }
      )
      .subscribe((data: any) => {
        this.subConnecte.next(true)
      }, (error: HttpErrorResponse) => {
      

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

  modifierCollegue(collegue: Collegue){

    const URL_BACKEND = environment.backendUrl + '/collegues/' + collegue.matricule; 

    return this._http.patch(URL_BACKEND, {
      email : collegue.email, 
      photoUrl: collegue.photoUrl
    },
      
    {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      withCredentials: true
    })
 
  }

  creerCollegue(collegue: Collegue){

    const URL_BACKEND = environment.backendUrl + '/collegues/'; 

   return this._http
    .post(URL_BACKEND, {
      nom: collegue.nom,
      prenoms: collegue.prenoms,
      email: collegue.email, 
      dateDeNaissance : collegue.dateDeNaissance, 
      photoUrl: collegue.photoUrl
    },

      {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
        withCredentials: true,
        responseType: 'text'
      }
    );
  }


  validerEmail(email: string) : Observable<ValidationErrors>{

    const URL_BACKEND = environment.backendUrl + '/collegues?email='+email; 

    return this._http.get<Observable<ValidationErrors>>(URL_BACKEND,       {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      withCredentials: true
    })
    .pipe(
      catchError(() => 
        of( {erreur: true})
      )
    )
    

  }

}
