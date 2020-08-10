import { Component, OnInit } from '@angular/core';
import { SearchBarService } from '../search-bar.service';
import { Users } from '../users';
// import { auth } from 'firebase';
// // import { map } from 'rxjs/operators';
// import * as firebaseui from 'firebaseui';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  // constructor(){}
  myuser:Users[];

  constructor(private api:SearchBarService){
    this.api.getSearch().subscribe((response)=>{
    this.myuser = response;
   },(error)=>{
  })
  }

  // courses:["python","java","javascript","c++"];
  ngOnInit() {
  }

}