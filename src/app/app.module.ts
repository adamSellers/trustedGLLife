import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { Keyboard } from '@ionic-native/keyboard';
import {IonicStorageModule, Storage} from '@ionic/storage';
import { Network } from '@ionic-native/network';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { MyApp } from './app.component';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
import { ChatterServiceProvider } from '../providers/chatter-service/chatter-service';
import { AuthenticationServiceProvider } from '../providers/authentication-service/authentication-service';
import { ConnectivityProvider } from '../providers/connectivity/connectivity';
import { RestaurantServiceProvider } from '../providers/restaurant-service/restaurant-service';
import { IngredientServiceProvider } from '../providers/ingredient-service/ingredient-service';
import { UserServiceProvider } from '../providers/user-service/user-service';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    InAppBrowser,
    Keyboard,
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GoogleMapsProvider,
    ChatterServiceProvider,
    AuthenticationServiceProvider,
    ConnectivityProvider,
    RestaurantServiceProvider,
    IngredientServiceProvider,
    UserServiceProvider
  ]
})
export class AppModule {}
