import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-reg-pet',
  templateUrl: './reg-pet.component.html',
  styleUrls: ['./reg-pet.component.css']
})
export class RegPetComponent implements OnInit {
  errors: any;
	newPet = {
		"name": "",
    "type": "",
    "description": "",
    
    }
    
  constructor(private _httpService: HttpService,
		private router: Router) { }

  ngOnInit() {
  }

  createPet(){
    let obs = this._httpService.createPet(this.newPet);
    obs.subscribe(data => {
      	if (data['message'] == "Success") {
        	this.newPet = {
            "name": "",
            "type": "",
            "description":""
       		}
        	this.router.navigate(['/']);
      	} else if (data['err']) {
          console.log(data['err']);
          // if (data['err'].code=="11000"){
          //   this.errors = "There is already a pet with this name in the database";
          // }
        	this.errors = data['err'];
      }
    });
  }
}
