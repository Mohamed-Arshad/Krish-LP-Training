import { Injectable, NotFoundException } from '@nestjs/common';
import { createOwnerDto } from './createOwner.dto';
import {v1 as uuid} from 'uuid';
import { updateOwnerDto } from './updateOwner.dto';
import { OwnerRepository } from './owners.repository';
import { Owner } from './schemas/owners.schema';

@Injectable()
export class OwnersService {

    constructor(private ownerRepository:OwnerRepository){}

    async getAllOwners():Promise<Owner[]>{
        return await this.ownerRepository.findall();
    }

    async createOwner(createOwnerDto:createOwnerDto):Promise<Owner>{
            return await this.ownerRepository.create(createOwnerDto);
    }

    async getOwnersById(id:string):Promise<Owner>{
        return await this.ownerRepository.findById(id);
    }

    async deleteOwnerById(id:string):Promise<Owner>{
        return await this.ownerRepository.deleteById(id);
    }

    async updateOwnerById(id:string, updateOwnerDto:updateOwnerDto):Promise<Owner>{
        return await this.ownerRepository.updateById(id,updateOwnerDto);
    }
}
