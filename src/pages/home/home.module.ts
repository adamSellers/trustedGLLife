/**
 * Home page module file.
 * Trusted GL Life application, will hold the tabs setup.
 * Adam Sellers - asellers@salesforce.com
 * V0.1 - 11th June 2017
 */

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';


@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(HomePage)
  ],
  exports: [
    HomePage
  ]
})

export class HomePageModule {}
