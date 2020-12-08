import { Injectable } from '@angular/core';
import { Car } from 'src/app/models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  cars: Array<Car> = [
    {id: 0,brandName: 'Mercedes',modelName: 'GLX-200',priceInRub: 122},
    {id: 1,brandName: 'Scoda',modelName: 'X5',priceInRub: 145},
    {id: 2,brandName: 'Polo',modelName: 'X7',priceInRub: 185},
    {id: 3,brandName: 'Opel',modelName: 'M2',priceInRub: 100},
    {id: 4,brandName: 'Mercedes',modelName: 'CLA-200',priceInRub: 110}
  ];
  getCars(){
    return this.cars;
  }

  getCar(id: number){
    return this.cars.find((el) => el.id === id);
  }

  constructor() { }
}
