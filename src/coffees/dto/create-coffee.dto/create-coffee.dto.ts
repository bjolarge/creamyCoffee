import { IsString } from "class-validator";
import { isString } from "class-validator/types/decorator/decorators";
export class CreateCoffeeDto {
   @IsString()
   readonly name:string;
   
   @IsString()
   readonly brand:string;

   @IsString({each:true})
   readonly flavors: string[];
}
