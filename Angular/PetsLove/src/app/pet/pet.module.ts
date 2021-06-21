import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPetComponent } from './list-pet/list-pet.component';
import { CreatePetComponent } from './create-pet/create-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';



@NgModule({
  declarations: [
    ListPetComponent,
    CreatePetComponent,
    EditPetComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PetModule { }
