import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { User, Repository } from '../../models/model';

@Injectable()
export class GithubServiceProvider {

  private baseUrl = "https://api.github.com/users/";


  constructor(public http: Http) {
  }

  getUserInformation(username: string): Observable<any> {

    return this.http.get(this.baseUrl + username)
      .map((data: Response) => data.json())
      .catch((error:Response)=> Observable.of(false));

  }


  getUserRepoInformation(username: string): Observable<Repository[]> {

    return this.http.get(this.baseUrl + username + "/repos")
      .map((data: Response) => data.json());

  }

}
