import { Body, Controller, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { Delete, Query } from '@nestjs/common/decorators';

@Controller('students')
export class StudentsController {
    @Get()
    findAll(@Query()paginationQuery){
        const{limit, offset} = paginationQuery;
     return `This returns all the coffees controller with the limit of ${limit} and offset -${offset} property`;
    }
 
    @Get(':id')
    findOne(@Param('id')id:string){
     return `The individual items from the coffee #${id} section`;
    }
 
    @Post()
    create(@Body()body){
     return body;
    }

    @Patch(':id')
   Update(@Param('id')id:string, @Body()body){
    return `The coffee with this #${id} has been effetively updated in the list`;
   }

   // Note for the delete route, I don't have to include the body route
  
   @Delete(':id')
   Remove(@Param('id')id:string){
    return `The following items in the list was deleted #${id}`;
   }
}
