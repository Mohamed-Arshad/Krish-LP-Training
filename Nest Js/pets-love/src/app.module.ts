import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OwnersModule } from './owners/owners.module';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [OwnersModule, PetsModule,MongooseModule.forRoot("mongodb://localhost:27017/PetsLove")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
