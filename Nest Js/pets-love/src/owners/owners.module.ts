import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OwnersController } from './owners.controller';
import { OwnerRepository } from './owners.repository';
import { OwnersService } from './owners.service';
import { Owner, ownerSchema } from './schemas/owners.schema';

@Module({
  imports: [MongooseModule.forFeature([{name:Owner.name,schema:ownerSchema}])],
  controllers: [OwnersController],
  providers: [OwnersService,OwnerRepository]
})
export class OwnersModule {}
