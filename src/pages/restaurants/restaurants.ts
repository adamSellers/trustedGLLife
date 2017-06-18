import {Component, ElementRef, ViewChild} from '@angular/core';
import {IonicPage, NavController, Platform, AlertController} from 'ionic-angular';
import {GoogleMapsProvider} from '../../providers/google-maps/google-maps';
import {RestaurantServiceProvider} from '../../providers/restaurant-service/restaurant-service';
import {AuthenticationServiceProvider} from '../../providers/authentication-service/authentication-service';

/**
 * Class for the Restaurants page. This will enable a user to search
 * and navigate to a child page for Restaurant details.
 * Trusted GF Life App - V0.1
 * Adam Sellers - asellers@salesforce.com
 * 11th JUne 2017
 */

@IonicPage()
@Component({
  selector: 'page-restaurants',
  templateUrl: 'restaurants.html',
})
export class RestaurantsPage {

  //setup properties required for this class first
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;

  latitude: number;
  longitude: number;
  restaurantData: any;

  constructor(public navController: NavController, public alertController: AlertController, public platform: Platform,
              public googleMaps: GoogleMapsProvider, public restaurantService: RestaurantServiceProvider, public auth: AuthenticationServiceProvider) {

  }

  ionViewDidLoad(): void {
    //load the google maps bit

    this.googleMaps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then(() => {

      //this.googleMaps.changeMarker(this.latitude, this.longitude);

    });

  }

  findRestaurants(): void {
    this.restaurantData = this.restaurantService.findRestaurants().then(() => {


      console.log('response is: ' + JSON.stringify(this.restaurantData));

    });
  }

  newRestaurant(): void {
    console.log('new restaurant has been clicked');

  }

  login() {

    this.auth.login2SF();

  }


}
