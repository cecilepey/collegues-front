import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppCollegueComponent } from './app-collegue/app-collegue.component';

@NgModule({
  declarations: [
    AppComponent,
    AppCollegueComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
