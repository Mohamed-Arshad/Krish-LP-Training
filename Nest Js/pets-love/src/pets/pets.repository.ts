import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { createPetDto } from "./createPet.dto";
import { Pet, PetDocument } from "./schemas/pets.schema";
import { updatePetDto } from "./updatePet.dto";

@Injectable()
export class PetRepository{
    constructor(@InjectModel(Pet.name) private petModel:Model<PetDocument>){}

    async create(createPetDto:createPetDto):Promise<Pet>{
        let pet=new this.petModel(createPetDto);
        return await pet.save();
    }

    async findall():Promise<Pet[]>{
        return await this.petModel.find();
    }

    async findById(id:string):Promise<Pet>{
        return await this.petModel.findById(id);
    }

    async deleteById(id:string):Promise<Pet>{
        return await this.petModel.findByIdAndRemove(id);
    }

    async updateById(id:string,updatePetDto:updatePetDto):Promise<Pet>{
        return await this.petModel.findByIdAndUpdate(id,updatePetDto);
    }
}