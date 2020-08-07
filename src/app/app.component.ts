import { Component, VERSION } from '@angular/core';
import { SearchBarService } from './search-bar.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  constructor(private api:SearchBarService){

  this.api.getSearch().subscribe((response)=>{
    console.log(response)
  },(error)=>{

  })
  }
ngOnInit(){

  }
}