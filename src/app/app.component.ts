import { Component} from '@angular/core';
import { Router } from '@angular/router';
//import {MatIconRegistry} from '@angular/material/icon';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent  {
  title = 'Weyland-Yutani corp Danmark';

  constructor(public router: Router) {}
   
}