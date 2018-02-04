import { Component } from '@angular/core';
import { OnInit } from '@angular/core'; // ADDED OnInit (to use in class)

// IF USING ROUTES:
import { ActivatedRoute, Params, Router } from '@angular/router';

// ADDED THIS FILE:
import { HttpService } from './http.service';

// IMPORT INTO MODULES WITH FORMS:
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor (private _httpService: HttpService) { }
}
