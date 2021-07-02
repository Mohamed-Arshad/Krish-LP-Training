import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PetsController } from './pets.controller';
import { PetRepository } from './pets.repository';
import { PetsService } from './pets.service';
import { PetSchema,Pet } from './schemas/pets.schema';

@Module({
  imports: [MongooseModule.forFeature([{name:Pet.name,schema:PetSchema}])],
  controllers: [PetsController],
  providers: [PetsService,PetRepository]
})
export class PetsModule {}
