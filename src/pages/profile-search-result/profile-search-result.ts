import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubServiceProvider } from '../../providers/github-service/github-service';
import { User, Repository } from '../../models/model';

@IonicPage()
@Component({
  selector: 'page-profile-search-result',
  templateUrl: 'profile-search-result.html',
})
export class ProfileSearchResultPage {
  username: string = "";
  user: User;
  repos: Repository[] = [];
  isUserValid: boolean = true;


  constructor(public navCtrl: NavController,
    private github: GithubServiceProvider,
    public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.username = this.navParams.get("username");
    this.github.getUserInformation(this.username).subscribe((user: any) => {

      if (!user) {
        this.isUserValid = false;
     
      } else {
        
        this.user = user;
        this.github.getUserRepoInformation(this.username).subscribe((repos: Repository[]) => {
          this.repos = repos;
        });
      }
    });


  }

}
