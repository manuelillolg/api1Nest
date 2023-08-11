import { Controller, Get, Param, Post, Body,Patch, Delete, ParseUUIDPipe, UsePipes, ValidationPipe} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from 'src/dto/create-car.dto';
import { UpdateCarDTO } from 'src/dto/update-car.dto';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ){

    }
    
    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    @Get(':id')
    //No pongo @Param('id') id:string porque por defecto se extrae un string
    getCarById( @Param('id',ParseUUIDPipe) id:string){
        return this.carsService.findOneById(id);
    }

    @Post()
    createCar(@Body() createCarDTO: CreateCarDTO){
        return this.carsService.create(createCarDTO);
    }

    @Patch(':id')
    updateCar(
        @Body() updateCarDTO: UpdateCarDTO,
        @Param('id', ParseUUIDPipe) id:string)
    {
            return this.carsService.update(id,updateCarDTO);
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id:string){
        return this.carsService.delete(id);
    }

}

