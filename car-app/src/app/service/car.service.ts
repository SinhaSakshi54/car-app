import { Injectable } from '@angular/core';
import { Car, CarListing } from '../model/car.model';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor() {}
  private cars: Car[] = CarListing;

  getCars(): Car[] {
    return this.cars;
  }

  getFilteredCars(
    year: string,
    make: string,
    model: string,
    price: string
  ): Car[] {
    return this.cars.filter((car) => {
      let match = true;
      if (year && car.year !== +year) {
        match = false;
      }
      if (make && car.make !== make) {
        match = false;
      }
      if (model && car.model !== model) {
        match = false;
      }
      if (price && car.price !== +price) {
        match = false;
      }
      return match;
    });
  }
}
