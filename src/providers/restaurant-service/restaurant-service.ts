import {Injectable} from '@angular/core';
import {DataService} from 'forcejs';
import {Storage} from '@ionic/storage';

/*
 * Service to get information on restaurants from SF.
 */
@Injectable()
export class RestaurantServiceProvider {

  //properties required for the class
  service: any;

  constructor(public storage: Storage) {

    this.service = DataService.getInstance();

  }


  findRestaurants() {

    let soql: string = 'SELECT Id, Name from Restaurant__c';

    return this.service.query(soql)
      .then(response => response.records.map(this.cleanRestaurants));

  }


  //function to pretty up the data from SF
  cleanRestaurants(restaurants) {

    return {

      id: restaurants.id,
      name: restaurants.Name

    }

  }

}
