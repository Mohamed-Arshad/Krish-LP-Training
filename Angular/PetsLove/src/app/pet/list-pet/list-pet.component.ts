import { Component, OnInit } from '@angular/core';
import { Pet } from '../model/pet.model';
import { PetService } from '../service/pet.service';

@Component({
  selector: 'app-list-pet',
  templateUrl: './list-pet.component.html',
  styleUrls: ['./list-pet.component.scss']
})
export class ListPetComponent implements OnInit {

  pets!:Pet[];
  constructor(private petservice:PetService) { }

  ngOnInit(): void {
    this.pets=this.petservice.onGet();
  }

  showAvatar:boolean=false;

  toggleAvatar(){
    this.showAvatar= !this.showAvatar;
  }

  toggleDelete(id:number){
    var removed = this.pets.splice(id, 1);
  }

}
