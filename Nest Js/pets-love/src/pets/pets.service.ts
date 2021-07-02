import { Injectable, NotFoundException } from '@nestjs/common';
import { createPetDto } from './createPet.dto';
import { PetRepository } from './pets.repository';
import { Pet } from './schemas/pets.schema';
import { updatePetDto } from './updatePet.dto';

@Injectable()
export class PetsService {
    constructor(private pets:PetRepository){}

    async getAllPets():Promise<Pet[]>{
         return await this.pets.findall();
    }

    async createPet(createPetDto:createPetDto):Promise<Pet>{
            return await this.pets.create(createPetDto);
    }

    async getPetsById(id:string):Promise<Pet>{
        return await this.pets.findById(id);
    }

    async deletePetById(id:string):Promise<Pet>{
        return await this.pets.deleteById(id);
    }

    async updatePetById(id:string, updatePetDto:updatePetDto):Promise<Pet>{
        return await this.pets.updateById(id,updatePetDto)
    }
}
