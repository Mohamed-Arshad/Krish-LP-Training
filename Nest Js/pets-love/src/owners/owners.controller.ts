import { UsePipes, ValidationPipe } from '@nestjs/common';
import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { createOwnerDto } from './createOwner.dto';
import { OwnersService } from './owners.service';
import { Owner } from './schemas/owners.schema';
import { updateOwnerDto } from './updateOwner.dto';

@Controller('owners')
export class OwnersController {

    constructor(private owners:OwnersService){}

    @Get()
    async getAllOwners():Promise<Owner[]>{
        return await this.owners.getAllOwners();
    }

    @Post()
    @UsePipes(ValidationPipe)
    async createOwner(@Body() request:createOwnerDto):Promise<Owner>{
        return await this.owners.createOwner(request);
    }

    @Get('/:id')
    async getOwnerById(@Param('id') id:string){
        let output:Owner;
        await this.owners.getOwnersById(id).then(owner=>{output=owner}).catch(()=>{throw new NotFoundException("No owner found in id: "+id);});
        return output;
    }

    @Delete('/:id')
    //@HttpCode(204)
    async deleteOwnerById(@Param('id') id:string){
        let output:Owner;
        await this.owners.deleteOwnerById(id).then(owner=>{output=owner}).catch(()=>{throw new NotFoundException("No owner found in id: "+id);});
        return output;
    }

    @Put('/:id')
    async updateOwnerById(@Param('id') id:string, @Body() request:updateOwnerDto){
        let output:Owner;
        await this.owners.updateOwnerById(id,request).then(owner=>{output=owner}).catch(()=>{throw new NotFoundException("No owner found in id: "+id);});
        return output;
    }
}
