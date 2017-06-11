import {Injectable} from '@angular/core';
import {Platform} from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';
import {ConnectivityProvider} from '../connectivity/connectivity';


/*
 * Google maps service that will be injected into the restaurants tab
 * of the application.
 */
@Injectable()
export class GoogleMapsProvider {

  //setup properties required for the map class here
  mapElement: any;
  pleaseConnect: any;
  map: any;
  mapInitialised: boolean = false;
  mapLoaded: any;
  mapLoadedObserver: any;
  currentMarker: any; //this will need to be changed to a collection of markers
  apiKey: string = 'AIzaSyAdFzdco_5sK_EwYrh1f_klHdQ1TWWg5wE';


  constructor(public platform: Platform, public connecitvity: ConnectivityProvider, public geolocation: Geolocation) {

  }

  //functions exposed by this class below.
  //firstly, the initialisation function for the map itself
  init(mapElement: any, pleaseConnect: any): Promise<any> {

    this.mapElement = mapElement;
    this.pleaseConnect = pleaseConnect;

    return this.loadGoogleMaps();

  }

  loadGoogleMaps(): Promise<any> {

    return new Promise((resolve) => {

      //first we check to see if google maps has been loaded
      if (typeof google == 'undefined' || typeof google.maps == 'undefined') {

        console.log('Google maps javascript needs to be loaded');

        this.disableMap(); //call this to indicate to the user that map isn't available

        if (this.connecitvity.isOnline()) { //is user online?

          //this is the callback function that google maps will call
          window['mapInit'] = () => {

            this.initMap().then(() => {

              resolve(true);

            });

            this.enableMap();

          }

          //now build the script tag and source
          let script = document.createElement("script");
          script.id = 'googleMaps';

          if (this.apiKey) {

            script.src = 'http://maps.google.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';

          } else {

            script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';

          }

          document.body.appendChild(script);

        }

      } else {

        //google maps has already been loaded, so check if online
        if (this.connecitvity.isOnline()) {

          //online, so init and enable the map
          this.initMap();
          this.enableMap();

        } else {

          //offline so display to the user
          this.disableMap();

        }

      }
      //add listeners to react to changes in online state as required.
      this.addConnectivityListeners();

    });

  }

  initMap(): Promise<any> {

    this.mapInitialised = true;

    return new Promise((resolve) => {

      //get user's current location and pass it into Google maps function
      this.geolocation.getCurrentPosition().then((position) => {

        let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        console.log('latlong is: ' + JSON.stringify(latLng));


        let mapOptions = {

          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP

        }

        this.map = new google.maps.Map(this.mapElement, mapOptions);
        resolve(true);

      });

    });


  }

  disableMap(): void {

    if (this.pleaseConnect) {

      this.pleaseConnect.style.display = 'block';

    }

  }

  enableMap(): void {

    if (this.pleaseConnect) {

      this.pleaseConnect.style.display = 'none';

    }

  }

  addConnectivityListeners(): void {

    this.connecitvity.watchOnline().subscribe(() => {

      console.log('online');

      setTimeout(() => {

        if (typeof google == 'undefined' || typeof google.maps == 'undefined') {

          this.loadGoogleMaps();

        } else {

          if (!this.mapInitialised) {

            this.initMap();

          }

          this.enableMap();

        }

      }, 2000);

    });

    this.connecitvity.watchOffline().subscribe(() => {

      console.log('offline');

      this.disableMap();

    });

  }

  changeMarker(lat: number, lng: number): void {

    let latLng = new google.maps.LatLng(lat, lng);

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng

    });

    if(this.currentMarker) {

      this.currentMarker.setMap(null);

    }

    this.currentMarker = marker;

  }

}
