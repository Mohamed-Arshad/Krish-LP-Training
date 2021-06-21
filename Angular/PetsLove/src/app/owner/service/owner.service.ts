import { Injectable } from '@angular/core';
import { Owner } from '../model/owner.model';
import owners from '../data/owners.json';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  owners:Owner[]=owners;
  constructor() { }

  onGet(){
    return this.owners;
  }

  onAdd(owner:Owner){
    this.owners.push(owner);
  }

  onGetbyid(id:number){
    return this.owners[id];
  }
}
