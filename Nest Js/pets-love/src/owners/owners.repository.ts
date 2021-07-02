import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { createOwnerDto } from "./createOwner.dto";
import { Owner, OwnerDocument } from "./schemas/owners.schema";
import { updateOwnerDto } from "./updateOwner.dto";

@Injectable()
export class OwnerRepository{
    constructor(@InjectModel(Owner.name) private ownerModel:Model<OwnerDocument>){}

    async create(createOwnerDto:createOwnerDto):Promise<Owner>{
        let owner=new this.ownerModel(createOwnerDto);
        return await owner.save();
    }

    async findall():Promise<Owner[]>{
        return await this.ownerModel.find();
    }

    async findById(id:string):Promise<Owner>{
        return await this.ownerModel.findById(id);
    }

    async deleteById(id:string):Promise<Owner>{
        return await this.ownerModel.findByIdAndRemove(id);
    }

    async updateById(id:string,updateOwnerDto:updateOwnerDto):Promise<Owner>{
        return await this.ownerModel.findByIdAndUpdate(id,updateOwnerDto);
    }
}