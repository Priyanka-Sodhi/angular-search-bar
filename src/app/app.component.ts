import { Component, VERSION } from '@angular/core';
import { SearchBarService } from './search-bar.service';
import { Users } from './users';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  constructor(){}

ngOnInit(){
  }



}