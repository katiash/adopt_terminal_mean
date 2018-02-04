import { Injectable } from '@angular/core';

// ADDED FOLLOWING FILE:
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  // CONSTRUCTING THE CONSTRUCTOR:
  constructor(private _http: HttpClient) { }

  listPets() {
    return this._http.get('/pets');
  }

  createPet(newPet){ 
    return this._http.post('/new-pet', newPet);	
  } 
  getOnePet(id) {  //When Update button is clicked
    console.log("I am in the service getOneRestaurant with id of: ", id); 
    return this._http.get('/pet/'+id);
  }
  
  editPet(selectedPet) {
    console.log("Service file. editPet route.")
    console.log("Service file. selectedPet ID is: ", selectedPet._id);
    console.log("Service file. selectedPet ID patch data is: ", selectedPet);
    return this._http.patch('/edit-pet/'+selectedPet._id, selectedPet);
  }
  removePet(id) {
    return this._http.delete('/delete-pet/'+id);
  }

}