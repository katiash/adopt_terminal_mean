import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ADDED FOLLOWING MODULES:
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// ADDED FOLLOWING FILES:
import { HttpService } from './http.service';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

//** INSERT SUB-COMPONENT FILES HERE:
import { ListPetsComponent } from './list-pets/list-pets.component';
import { RegPetComponent } from './reg-pet/reg-pet.component';
import { PetPageComponent } from './pet-page/pet-page.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';



@NgModule({
  declarations: [
    AppComponent,
    // ** DECLARE SUB-COMPONENTS HERE!
    ListPetsComponent,
    RegPetComponent,
    PetPageComponent,
    EditPetComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //ADDED!
    AppRoutingModule, //ADDED!
    FormsModule //ADDED!
  ],
  providers: [HttpService], //ADDED!
  bootstrap: [AppComponent]
})
export class AppModule { }
