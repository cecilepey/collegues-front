import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Directive({
  selector: '[appEmailValidator]', 
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: EmailValidatorDirective, multi: true}]
})
export class EmailValidatorDirective implements Validator{

  constructor(private dataService: DataService) { }

  validate(control: AbstractControl): Observable<ValidationErrors> | null {



   return  this.dataService.validerEmail(control.value);
  

    
}
}
