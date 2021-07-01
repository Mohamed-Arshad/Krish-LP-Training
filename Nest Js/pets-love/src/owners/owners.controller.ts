import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { createOwnerDto } from './createOwner.dto';
import { OwnersService } from './owners.service';
import { updateOwnerDto } from './updateOwner.dto';

@Controller('owners')
export class OwnersController {

    constructor(private owners:OwnersService){}

    @Get()
    getAllOwners(){
        return this.owners.getAllOwners();
    }

    @Post()
    createOwner(@Body() request:createOwnerDto){
        return this.owners.createOwner(request);
    }

    @Get('/:id')
    getOwnerById(@Param('id') id:string){
        return this.owners.getOwnersById(id);
    }

    @Delete('/:id')
    @HttpCode(204)
    deleteOwnerById(@Param('id') id:string){
        this.owners.deleteOwnerById(id);
    }

    @Put('/:id')
    updateOwnerById(@Param('id') id:string, @Body() request:updateOwnerDto){
        return this.owners.updateOwnerById(id,request);
    }
}
