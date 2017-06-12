import { Injectable } from '@angular/core';
import {OAuth, DataService } from 'forcejs';
import {Storage} from '@ionic/storage';
import { AlertController } from 'ionic-angular';


/*
 * Authentication service is going to be used to handle the auth into Salesforce.
 * This class will be injected to perform not only the authentication event, it
 * will also expose methods to check if a user is authenticated.
 * Trusted GF Life App - V0.1
 * Adam Sellers - asellers@salesforce.com
 * 12th June 2017
*/
@Injectable()
export class AuthenticationServiceProvider {

  constructor(public storage: Storage, public alertCtrl: AlertController) {
    console.log('Hello AuthenticationServiceProvider Provider');
  }

  login2SF(): Promise<any> {

    let oauth = OAuth.createInstance();
    return oauth.login('3MVG9YDQS5WtC11rZbrom81oUqqwcThd7n0H35u60zURDkoh0wMwntignOQ7nHvNVMMH9tV4iPXPx4L22eFKQ').then((oauthData) => {

      //create data service
      DataService.createInstance(oauthData, {ProxyURL: 'https://trustedgflife.my.salesforce.com/'});

      }, (error) => {

        let alert = this.alertCtrl.create({
          title: 'Login Failed',
          subTitle: 'Please login again',
          buttons: ['Ok']
        });

        alert.present();

      });

  }

  isAuthenticated(): boolean {

    if(this.storage.get('oauthdata') === null) {

      return false;

    } else {

      return true;

    }

  }

}
