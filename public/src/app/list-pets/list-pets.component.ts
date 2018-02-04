import { Component, OnInit } from '@angular/core';

// IMPORTED FOLLOWING MODULES:
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.css']
})

export class ListPetsComponent implements OnInit {
  pets: [any];
  errors: any;
  fetchAllError: string;
  id: any;
  
  constructor(
    private _httpService: HttpService,
		private route: ActivatedRoute,
		private router: Router
  ) { }

  ngOnInit() {
    this.listPets();
  }

  listPets(){
    let obs = this._httpService.listPets();
    obs.subscribe(data => {
      if(data['message'] == "Success") {
        this.pets = data['data']; 
        this.pets.sort(this.compare);
        // NEED TO PLAY AROUND WITH THIS A BIT MORE TO FIGURE OUT HOW TO ADJUST AND SORT.
        console.log(this.pets);   
      } else {
        this.fetchAllError =" Something went wrong; we could not get the pets at this time."
      }	
    }); 
  }

	compare(a,b) {
    a=a.type.toLowerCase(), b=b.type.toLowerCase();
    console.log("Print a and b: ", a, b);
    if(a<b)
      return -1;
    if(a>b)
      return 1;
    return 0;
  }
}
