import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid} from 'uuid';
import { CreateCarDTO } from 'src/cars/dto/create-car.dto';
import { UpdateCarDTO } from 'src/cars/dto/update-car.dto';
@Injectable()
export class CarsService {

    private cars  :Car[] = [
        // {
        //     id:uuid(),
        //     brand: 'Toyota',
        //     model: 'Corolla'
        // },
        
    ];

    findAll(){
        return this.cars;
    }

    findOneById(id:string){
        const car = this.cars.find(car => car.id === id);

        if(!car)
            throw new NotFoundException(`Car with id ${id} not found`);
        
        return car;
    }

    create(createCarDTO : CreateCarDTO){
        const car:Car = {
            id: uuid(),
            model: createCarDTO.model,
            brand: createCarDTO.brand
        };

        this.cars.push(car);

        return car;
    }

    update(id:string, updateCarDTO: UpdateCarDTO){
        let carDB =this.findOneById(id);
        
        this.cars = this.cars.map(car =>{
            if(car.id ==id){
                carDB = {
                    ...carDB,
                    ...updateCarDTO,
                    id,
                }
            }

            return car;
        })

        return carDB;
    }

    delete( id:string){
        const car = this.findOneById(id);
        this.cars = this.cars.filter(car => car.id !== id);
    }

    fillCarsWithSeedData(cars: Car[]){
        this.cars = cars;
    }
}
