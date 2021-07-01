import { Injectable, NotFoundException } from '@nestjs/common';
import { Owner } from 'src/owners/owners.model';
import {v1 as uuid} from 'uuid';
import { createPetDto } from './createPet.dto';
import { Pet } from './pets.model';
import { updatePetDto } from './updatePet.dto';

@Injectable()
export class PetsService {
    private pets:Pet[]=[];

    getAllPets(){
        return this.pets;
    }

    createPet(createPetDto:createPetDto){
            let pet:Pet=new Pet();

            pet.id=uuid();
            pet.petname=createPetDto.petname;
            pet.pettype=createPetDto.pettype;
            pet.icon=createPetDto.icon;
            pet.description=createPetDto.description;
            pet.amount=createPetDto.amount;
            
            this.pets.push(pet);
            return pet;
    }

    getPetsById(id:string){
        const pet:Pet=this.pets.find((pet)=>pet.id==id);
        if(typeof pet === 'undefined'){
            throw new NotFoundException("No pet found in id: "+id);
        }
        return pet;
    }

    deletePetById(id:string){
        const item=this.getPetsById(id);
        this.pets = this.pets.filter((pet)=>pet!=item);
    }

    updatePetById(id:string, updatePetDto:updatePetDto){
        let pet=this.getPetsById(id);
        if(updatePetDto.petname){
            pet.petname=updatePetDto.petname;
        }
        if(updatePetDto.pettype){
            pet.pettype=updatePetDto.pettype;
        }
        if(updatePetDto.icon){
            pet.icon=updatePetDto.icon;
        }
        if(updatePetDto.description){
            pet.description=updatePetDto.description;
        }
        return pet;
    }
}
