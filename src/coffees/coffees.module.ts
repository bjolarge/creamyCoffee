import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';

@Module({
    providers:[CoffeesService],
    controllers:[CoffeesController],
})
export class CoffeesModule {

}
