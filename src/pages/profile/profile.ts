import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {UserServiceProvider} from '../../providers/user-service/user-service';


/**
 * User Profile page for TrustedGF Life.
 * User information will be taken from Salesforce User info.
 * (Need to figure out if contact or user info is right for this
 * as it will be a community license in the end)
 * Adam Sellers - asellers@salesforce.com
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  userData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
              public userService: UserServiceProvider) {


  }

  ionViewDidLoad() {
    this.userData = this.userService.getUserData().then((userData) => {

      console.log('user data is: ' + JSON.stringify(userData));

    });


  }

}
