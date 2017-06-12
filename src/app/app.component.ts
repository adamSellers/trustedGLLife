import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {OAuth, DataService} from 'forcejs';
import {Storage} from '@ionic/storage';
import {AuthenticationServiceProvider} from '../providers/authentication-service/authentication-service';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = 'HomePage';

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
              public storage: Storage, public authService: AuthenticationServiceProvider) {

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      //we initialize the app -- will change this to check for logon pretty quickly
      if (authService.isAuthenticated()) {
        this.initialiseApp();
      }

    });

  }

  initialiseApp() {

    this.authService.login2SF();


  }

}

