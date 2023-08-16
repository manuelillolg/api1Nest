import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { CarsService } from 'src/cars/cars.service';
import { BRANDS_SEED } from './data/brands.seed';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService:CarsService,
    private readonly brandsService:BrandsService
  ){

  }
 populateDB(){
  this.carsService.fillCarsWithSeedData(CARS_SEED);
  this.brandsService.fillBrandsWithSeedData(BRANDS_SEED);
  return 'SEED executed';
 }
}
