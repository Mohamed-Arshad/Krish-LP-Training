import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Owner } from '../model/owner.model';
import { OwnerService } from '../service/owner.service';

@Component({
  selector: 'app-edit-owner',
  templateUrl: './edit-owner.component.html',
  styleUrls: ['./edit-owner.component.scss']
})
export class EditOwnerComponent implements OnInit {

  index!:number;
  owner:Owner=new Owner;
  constructor(private activatedRoute: ActivatedRoute,private ownerservice:OwnerService,private router:Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.index=params.id;
      this.owner=this.ownerservice.onGetbyid(this.index);
  });
  }

  submitData(){
     this.router.navigate([`owners`]);
  }
}
