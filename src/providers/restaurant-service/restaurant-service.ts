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
  restaurants: any;

  constructor(public storage: Storage) {

    this.service = DataService.getInstance();

  }

  //function to pretty up the data from SF
  cleanRestaurants(restaurants) {

    return {

      id: restaurants.id,
      name: restaurants.Name

    }

  }

  findRestaurants(): Promise<any> {

    this.restaurants = this.service.query(`SELECT id, Name from Restaurant__c`)
      .then(response => response.records.map(this.cleanRestaurants));

    return this.restaurants;

  }

}
