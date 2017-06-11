import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
 * Google maps service that will be injected into the restaurants tab
 * of the application.
*/
@Injectable()
export class GoogleMapsProvider {

  constructor() {
    console.log('Hello GoogleMapsProvider Provider');
  }

}
