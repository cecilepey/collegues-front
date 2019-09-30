import { Routes } from '@angular/router';
import { GallerieComponent } from './gallerie/gallerie.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { AccueilComponent } from './accueil/accueil.component';
import {GalerieDetailComponent} from './galerie-detail/galerie-detail.component' ; 
import { ConnexionGuard } from './ConnexionGuard';
import { LoginComponent } from './login/login.component';


export const ROUTES: Routes = [
    { path: 'login', component: LoginComponent},
    
    {
    path: '',
    canActivateChild: [ConnexionGuard],
    children: [
    { path: 'accueil', component: AccueilComponent },
    { path: 'galerie', component: GallerieComponent },
    { path: 'galerie/:matricule', component: GalerieDetailComponent},
    { path: 'apropos', component: AProposComponent }
    ]
}
];