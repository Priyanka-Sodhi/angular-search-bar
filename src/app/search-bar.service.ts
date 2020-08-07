import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';
// import { BehaviourSubject } from 'rxjs';

@Injectable()
export class SearchBarService {

  constructor(private http: HttpClient) { }

  getSearch():Observable<any>{
    return this.http.client.get("https://jsonplaceholder.typicode.com/users");
  }
}