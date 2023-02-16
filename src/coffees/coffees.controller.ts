import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeeService:CoffeesService) {}

    @Get()
   findAll(){
    return this.coffeeService.findAll();
    //return 'This returns all the coffees controller';
   }

   @Get(':id')
   findOne(@Param('id')id:string){
    console.log(typeof id);
   return this.coffeeService.findOne('' +id);
    // return `The individual items from the coffee #${id} section`;
   }

   @Post()
   create(@Body()createCoffeeDto:CreateCoffeeDto){
    console.log(createCoffeeDto instanceof CreateCoffeeDto);
    return this.coffeeService.create(createCoffeeDto);
    //return body;
   }
   
   @Patch(':id')
   Update(@Param('id')id:string, @Body()updateCoffeeDto:UpdateCoffeeDto){
   return this.coffeeService.update(id, updateCoffeeDto);
   // return `This is an object of #${id} that was just updated`;
   }

   @Delete(':id')
   Remove(@Param('id')id:string){
    return this.coffeeService.remove(id);
    //return `This is an object with #${id} that was just removed`;
   }
}
