import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../model/pet.model';
import { PetService } from '../service/pet.service';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.scss']
})
export class EditPetComponent implements OnInit {

  index!: number;
  pet: Pet = new Pet();
  constructor(private activatedRoute: ActivatedRoute, private petservice: PetService, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.index = params.id;
      this.pet = this.petservice.onGetbyid(this.index);
    });

  }

  submitData(){
    this.router.navigate([`pets`]);
 }
}
