import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { Keyboard } from '@ionic-native/keyboard';
import { Network } from '@ionic-native/network';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { MyApp } from './app.component';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { ChatterServiceProvider } from '../providers/chatter-service/chatter-service';
import { AuthenticationServiceProvider } from '../providers/authentication-service/authentication-service';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
    DataServiceProvider,
    ChatterServiceProvider,
    AuthenticationServiceProvider
  ]
})
export class AppModule {}
