import {Injectable} from '@angular/core';
import {Network} from '@ionic-native/network';
import {Platform} from 'ionic-angular';
import {Observable} from 'rxjs/observable';


/*
 * This connectivity class exists to provide the application with an
 * easy way to check if a user has access to the interwebz.
 * Trusted GF Life App - V0.1
 * Adam Sellers - asellers@salesforce.com
 * 11th June 2017
 */
@Injectable()
export class ConnectivityProvider {

  //setup properties required for the class here.
  onDevice: boolean;

  constructor(public network: Network, public platform: Platform) {

    this.onDevice = this.platform.is('cordova');

  }

  //function to check if device is online
  isOnline(): boolean {

    if (this.onDevice && this.network.type) {

      return this.network.type != 'none';

    } else {

      return navigator.onLine;

    }
  }

  isOffline(): boolean {

    if (this.onDevice && this.network.type) {

      return this.network.type == 'none';

    } else {

      return !navigator.onLine;

    }
  }

  //return an observable to watch if device goes offline
  watchOffline(): any {

    return this.network.onDisconnect();

  }

  //return an observable to watch if device goes online
  watchOnline(): any {

    return this.network.onConnect();

  }


}
