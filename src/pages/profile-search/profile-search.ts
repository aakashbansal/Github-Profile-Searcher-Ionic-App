import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile-search',
  templateUrl: 'profile-search.html',
})
export class ProfileSearchPage {

  username: string = "";
  displayMessage: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  getUserInformation(): void {

    if (this.username) {

      this.navCtrl.push('ProfileSearchResultPage', {
        username: this.username
      });

      this.displayMessage = false;

    } else {

      this.displayMessage = true;
    }

  }

}
