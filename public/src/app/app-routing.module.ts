import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//** INSERT SUB-COMPONENT FILES HERE:
import { ListPetsComponent } from './list-pets/list-pets.component';
import { RegPetComponent } from './reg-pet/reg-pet.component';
import { PetPageComponent } from './pet-page/pet-page.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';

const routes: Routes = [
  { path: '',component: ListPetsComponent },
  { path: 'new',component: RegPetComponent },
  { path: 'details/:id',component: PetPageComponent },
  { path: 'edit/:id',component: EditPetComponent },
  { path: '', pathMatch: 'full', redirectTo: '/'},
  {path: '**', component: ListPetsComponent }
];  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
