import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';

/*
  Esto no es más que una clase (AppModule) con 
  un decorador 
*/

@Module({
  imports: [CarsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
