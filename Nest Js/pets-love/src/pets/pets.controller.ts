import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { createPetDto } from './createPet.dto';
import { PetsService } from './pets.service';
import { Pet } from './schemas/pets.schema';
import { updatePetDto } from './updatePet.dto';

@Controller('pets')
export class PetsController {
    constructor(private pets:PetsService){}

    @Get()
    async getAllpets(){
        return await this.pets.getAllPets();
    }

    @Post()
    @UsePipes(ValidationPipe)
    async createPets(@Body() request:createPetDto){
        return await this.pets.createPet(request);
    }

    @Get('/:id')
    async getPetsById(@Param('id') id:string){
        let output:Pet;
        await this.pets.getPetsById(id).then(pet=>{output=pet;}).catch(()=>{throw new NotFoundException("No Pets found in id: "+id);});
        return output;
    }

    @Delete('/:id')
    //@HttpCode(204)
    async deletePetById(@Param('id') id:string){
        let output:Pet;
        await this.pets.deletePetById(id).then(pet=>{output=pet;}).catch(()=>{throw new NotFoundException("No Pets found in id: "+id);});
        return output;
    }

    @Put('/:id')
    async updatePetById(@Param('id') id:string, @Body() request:updatePetDto){
        let output:Pet;
        await this.pets.updatePetById(id,request).then(pet=>{output=pet;}).catch(()=>{throw new NotFoundException("No Pets found in id: "+id);});
        return output;
    }
}
