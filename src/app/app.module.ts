import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchBarService } from './search-bar.service';

// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFirestoreModule } from 'angularfire2/fire';



  // Your web app's Firebase configuration
  const firebaseConfig = {
  apiKey: "AIzaSyDPAuJoAM8QBzHfJUgbyTevM36q56QG3Is",
  authDomain: "search-bar-cf6f0.firebaseapp.com",
  databaseURL: "https://search-bar-cf6f0.firebaseio.com",
  projectId: "search-bar-cf6f0",
  storageBucket: "search-bar-cf6f0.appspot.com",
  messagingSenderId: "245525762229",
  appId: "1:245525762229:web:b5dfc06f41bcbeadae6efc",
  measurementId: "G-Z9RGBCRM48"
};


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule],
  declarations: [ AppComponent, SearchBarComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SearchBarService]
})
export class AppModule { }
