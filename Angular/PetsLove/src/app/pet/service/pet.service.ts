import { Injectable } from '@angular/core';
import { Pet } from '../model/pet.model';
import pets from '../data/pets.json';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  pets:Pet[]=pets;
  constructor() { }

  onGet(){
    return this.pets;
  }

  onAdd(pet:Pet){
    this.pets.push(pet);
  }

  onGetbyid(id:number){
    return this.pets[id];
  }
}
