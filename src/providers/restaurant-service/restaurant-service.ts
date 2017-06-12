import { Injectable } from '@angular/core';
import { DataService } from 'forcejs';
import { Storage } from '@ionic/storage';


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

  //function to pretty up the data from SF
  cleanRestaurants(restaurants) {

    return {

      id: restaurants.id,
      Name: restaurants.Name,




    }

  }

  findRestaurants() {

    return this.service.query(`SELECT Id, Name, geolocation__c 
                               FROM Restaurant__c
                               ORDER BY Name`);
     // .then(response => response.records.map(this.cleanRestaurants));

  }

}
