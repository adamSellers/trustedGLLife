import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root: any = 'RestaurantsPage';
  tab2Root: any = 'IngredientsPage';
  tab3Root: any = 'ProfilePage';

  constructor(public navCtrl: NavController) {

  }

}
