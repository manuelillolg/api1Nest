import { Controller, Get, Param, ParseIntPipe, Post, Body,Patch, Delete} from '@nestjs/common';
import { CarsService } from './cars.service';

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
    getCarById( @Param('id',ParseIntPipe) id:number){
        return this.carsService.findOneById(Number(id));
    }

    @Post()
    createCar(@Body() body: any){
        return body;
    }

    @Patch(':id')
    updateCar(
        @Body() body: any,
        @Param('id',ParseIntPipe) id:number)
    {
            return body;
    }

    @Delete(':id')
    deleteCar(@Param('id',ParseIntPipe) id:number){
        return {
            method: 'delete',
            id
        }
    }

}

