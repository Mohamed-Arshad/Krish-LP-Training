import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { createPetDto } from './createPet.dto';
import { PetsService } from './pets.service';
import { updatePetDto } from './updatePet.dto';

@Controller('pets')
export class PetsController {
    constructor(private pets:PetsService){}

    @Get()
    getAllpets(){
        return this.pets.getAllPets();
    }

    @Post()
    @UsePipes(ValidationPipe)
    createEmployee(@Body() request:createPetDto){
        return this.pets.createPet(request);
    }

    @Get('/:id')
    getOwnerById(@Param('id') id:string){
        return this.pets.getPetsById(id);
    }

    @Delete('/:id')
    @HttpCode(204)
    deletePetById(@Param('id') id:string){
        this.pets.deletePetById(id);
    }

    @Put('/:id')
    updatePetById(@Param('id') id:string, @Body() request:updatePetDto){
        return this.pets.updatePetById(id,request);
    }
}
