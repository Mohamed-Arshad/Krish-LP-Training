import { Injectable, NotFoundException } from '@nestjs/common';
import { createOwnerDto } from './createOwner.dto';
import { Owner } from './owners.model';
import {v1 as uuid} from 'uuid';
import { updateOwnerDto } from './updateOwner.dto';

@Injectable()
export class OwnersService {

    private owners:Owner[]=[];

    getAllOwners(){
        return this.owners;
    }

    createOwner(createOwnerDto:createOwnerDto){
            let owner:Owner=new Owner();

            owner.id=uuid();
            owner.firstname=createOwnerDto.firstname;
            owner.lastname=createOwnerDto.lastname;
            owner.icon=createOwnerDto.icon;
            owner.contactno=createOwnerDto.contactno;
            owner.address=createOwnerDto.address;
            
            this.owners.push(owner);
            return owner;
    }

    getOwnersById(id:string){
        let owner=this.owners.find((owner)=>owner.id==id);
        if(typeof owner === 'undefined'){
            throw new NotFoundException("No owner found in id: "+id);
        }
        return owner;
    }

    deleteOwnerById(id:string){
        const item=this.getOwnersById(id);
        this.owners = this.owners.filter((owner)=>owner!=item);
    }

    updateOwnerById(id:string, updateOwnerDto:updateOwnerDto){
        let owner=this.getOwnersById(id);
        if(updateOwnerDto.firstname){
            owner.firstname=updateOwnerDto.firstname;
        }
        if(updateOwnerDto.lastname){
            owner.lastname=updateOwnerDto.lastname;
        }
        if(updateOwnerDto.icon){
            owner.icon=updateOwnerDto.icon;
        }
        if(updateOwnerDto.contactno){
            owner.contactno=updateOwnerDto.contactno;
        }
        if(updateOwnerDto.address){
            owner.address=updateOwnerDto.address;
        }
        return owner;
    }
}
