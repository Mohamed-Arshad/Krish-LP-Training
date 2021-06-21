import { Component, OnInit } from '@angular/core';
import { Owner } from '../model/owner.model';
import { OwnerService } from '../service/owner.service';

@Component({
  selector: 'app-list-owner',
  templateUrl: './list-owner.component.html',
  styleUrls: ['./list-owner.component.scss']
})
export class ListOwnerComponent implements OnInit {

  owners:Owner[]=[];
  constructor(private OwnerService:OwnerService) { }

  ngOnInit(): void {
    this.owners=this.OwnerService.onGet();
  }

  showAvatar:boolean=false;

  toggleAvatar(){
    this.showAvatar= !this.showAvatar;
  }

  toggleDelete(id:number){
    var removed = this.owners.splice(id, 1);  
    console.log("removed is: " + removed); 
  }

}
