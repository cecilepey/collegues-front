import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable, Subject, BehaviorSubject, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { ValidationErrors } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public collegueCache: Collegue[];

  public col: Collegue;

  private subCollegue = new Subject<Collegue>();

  private subConnecte = new BehaviorSubject(false);

  public tabMatricules: string[];

  constructor(private _http: HttpClient) { }

  get subCollegueObs(): Observable<Collegue> {
    return this.subCollegue.asObservable()
  }

  get subConnecteObs() {
    return this.subConnecte.asObservable()
  }

  rechercherParNom(nom: string): Observable<string[]> {

    const URL_BACKEND = environment.backendUrl + '/collegues?nom=' + nom;

    return this._http.get<string[]>(URL_BACKEND)

  }

  connexion(email: string, mdp: string) : Observable<string | void>  {

    const URL_BACKEND = environment.backendUrl + '/auth';

    return this._http
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
      .pipe(
        tap( data => {
          this.subConnecte.next(true)
        }, (error: HttpErrorResponse) => {
      
        }))
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

  rechercherPhotos(){

    const URL_BACKEND = environment.backendUrl + '/collegues/photos'; 
    
    return this._http.get<Collegue[]>(URL_BACKEND, { withCredentials: true}); 

  }

  isLoggedIn() : Observable<boolean> {

    const URL_BACKEND = environment.backendUrl + '/user'

    return this._http.get(URL_BACKEND, { withCredentials: true, responseType: 'text'})
    .pipe( map(() => true),
      catchError(()=> of(false)))
 

  }

  deconnexion(){

    const URL_BACKEND = environment.backendUrl + '/logout'; 

    return this._http
    .post(URL_BACKEND, 
      {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
        withCredentials: true,
        responseType: 'text'
      }
    );

  }


}
