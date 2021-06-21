import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Owner } from '../model/owner.model';
import { OwnerService } from '../service/owner.service';

@Component({
  selector: 'app-create-owner',
  templateUrl: './create-owner.component.html',
  styleUrls: ['./create-owner.component.scss']
})
export class CreateOwnerComponent implements OnInit {

  owner:Owner=new Owner();
  
  constructor(private ownerservice:OwnerService,private router:Router) { }

  ngOnInit(): void {
  }

  addOwner(){
    this.owner.id=this.ownerservice.onGetbyid(this.ownerservice.onGet().length-1).id+1;
    this.ownerservice.onAdd(this.owner);
    console.log(this.owner);
    this.router.navigate([`owners`]);
  }

}
