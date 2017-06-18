import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {DataService} from 'forcejs';

import 'rxjs/add/operator/map';

/*
 * User data service that will provide data and functionality required for
 * the users in Salesforce.
 * Adam Sellers - asellers@salesforce.com
 * 18th June 2017 - V0.1
 */
@Injectable()
export class UserServiceProvider {

  service: any;
  userId: string;

  constructor(public storage: Storage) {

    this.service = DataService.getInstance();
    this.userId = this.service.getUserId();

  }

  getUserData() {

    let soql: string = "SELECT Id, Username from User WHERE Id='" + this.userId +"'";

    return this.service.query(soql)
      .then(response => response.records.map(this.cleanUserData));

  }

  cleanUserData(userData) {

    return {

      id: userData.id,
      name: userData.Username

    }

  }

}
