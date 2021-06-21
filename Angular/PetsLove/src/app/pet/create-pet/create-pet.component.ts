import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from '../model/pet.model';
import { PetService } from '../service/pet.service';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.scss']
})
export class CreatePetComponent implements OnInit {

  pet:Pet=new Pet();
  constructor(private petservice:PetService,private router:Router) { }

  ngOnInit(): void {
  }

  addPet(){
    this.pet.id=this.petservice.onGetbyid(this.petservice.onGet().length-1).id+1;
    this.petservice.onAdd(this.pet);
    this.router.navigate([`pets`]);
  }

}
