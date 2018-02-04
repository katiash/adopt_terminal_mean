import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-pet-page',
  templateUrl: './pet-page.component.html',
  styleUrls: ['./pet-page.component.css']
})
export class PetPageComponent implements OnInit {
  errors: any;
  selectedPet ={
    "name": "",
    "type": "",
    "description": "",
    // "skills": [""]
  }

  constructor(
    private _httpService: HttpService,
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
      console.log("we are in getOnePet. Got data back!", data['data']);
			this.selectedPet = data['data']; 
			console.log(this.selectedPet);
  })}
    
  adoptPet(id: number) {  
		console.log("ID TO DELETE:",id);
		let obs = this._httpService.removePet(id);
		//console.log("hello1:", id);
		obs.subscribe(data => {
      //this.restaurant = data['data']; 
      console.log(data['data']);
      if (data['message'] == "Adopt(delete) success") {
        this.router.navigate(['/']); // if deleted, redirect to root
      } else if (data['err']) {
        this.errors = data['err'] 
      }
	  })	
	}

}
