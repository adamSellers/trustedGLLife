import { Injectable } from '@angular/core';
import { DataService } from 'forcejs';
import { Storage } from '@ionic/storage';


/*
 * Service to get data related to ingredients from SF.
*/
@Injectable()
export class IngredientServiceProvider {

  constructor(public storage: Storage) {
    console.log('Hello IngredientServiceProvider Provider');
  }

}
