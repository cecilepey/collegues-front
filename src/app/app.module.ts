import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppCollegueComponent } from './app-collegue/app-collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UrlValidatorDirective } from './validators/url-validator.directive';
import { EmailValidatorDirective } from './validators/email-validator.directive';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { ROUTES } from './app.routes'
import { RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { GalerieDetailComponent } from './galerie-detail/galerie-detail.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    AppComponent,
    AppCollegueComponent,
    RechercheCollegueParNomComponent,
    LoginComponent,
    UrlValidatorDirective,
    EmailValidatorDirective,
    MenuComponentComponent,
    GallerieComponent,
    AProposComponent,
    AccueilComponent,
    GalerieDetailComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule, 
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
