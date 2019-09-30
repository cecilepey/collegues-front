import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
    })
    export class ConnexionGuard implements CanActivateChild {
    
        constructor(private router: Router, private dataService: DataService) { }
    
        canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean|UrlTree> {

    
            // retourne `true` si l'utilisateur est connecté ou redirige vers la page de /login
          return this.dataService.isLoggedIn().pipe(
              map(ok => ok ? ok : this.router.parseUrl('/login')),
              tap(result => console.log('gardien:', result))
          );
      
        }
    }

