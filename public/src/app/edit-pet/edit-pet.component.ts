import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  errors: any;

  selectedPet = {
		"name": "",
    "type": "",
    "description": ""
	}
  constructor(private _httpService: HttpService,
		private route: ActivatedRoute,
		private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.getOnePet(params['id']);
    })		
  }
  getOnePet(id) {  
    let obs = this._httpService.getOnePet(id);
    obs.subscribe(data => {
      console.log("we are in getOneRestaurant. Got data back!", data['data']);
      this.selectedPet = data['data']; 
      console.log(this.selectedPet);
    })
  }

  editPet() {
    let obs = this._httpService.editPet(this.selectedPet);
    console.log("In editRestaurant, right after observable declaration ", this.selectedPet);
    obs.subscribe(data => {
      console.log("We are in Editing, print data we got back", data['message']);
      if (data['message'] == "Success") {
        console.log("Component update .ts file. Got to 'Success' Conditional.");
        this.selectedPet = {
            "name": "",
            "type": "",
            "description":""
        }
        this.router.navigate(['/']);
      } else if (data['err']) {
          console.log("Updating Errors:", data['err'] ) ; 
          this.errors = data['err']
      }
    })
  }
}