import {Injectable} from '@angular/core';
import {OAuth, DataService} from 'forcejs';
import {Storage} from '@ionic/storage';
import {AlertController} from 'ionic-angular';



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

  public clientId: string = '3MVG9ZL0ppGP5UrD_6s2uriohOg5JMvJu.6LfCIPYGVRztWl1dZ7RbQ_7BMTspbMJR_QXfSDTXtQ_WjmmlVIu';
  public loginString: string = 'https://login.salesforce.com';
  public callbackURL: string = 'http://localhost:8100/oauthcallback.html';
  public oauth: any;
  public service: any;

  constructor(public storage: Storage, public alertCtrl: AlertController) {
    console.log('Hello AuthenticationServiceProvider Provider');
  }

  login2SF(): Promise<any> {

    this.oauth = OAuth.createInstance(this.clientId, this.loginString, this.callbackURL);
    return this.oauth.login().then((oauthData) => {

      //create the DataService Instance
      this.service = DataService.createInstance(oauthData, {proxyURL: "https://adamsappcloud.my.salesforce.com/"});
      //Store the login details for the necessary data services
      this.storage.set('oauthData', oauthData).then(() => {

        console.log('oauthData stored successfully :' + JSON.stringify(oauthData));

      });

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

    if (this.storage.get('oauthData')) {

      return true;

    } else {

      return false;

    }

  }

  logout(): void {

    this.storage.remove('oauthData').then(() => {

      console.log('storage bit cleared')

    });

  }

}
