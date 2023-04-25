import { Component } from '@angular/core';
import { CarService } from '../service/car.service';
import { Car } from '../model/car.model';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent {
  cars: Car[] = [];
  years: number[] = [];
  makeList: string[] = [];
  modelList: string[] = [];
  prices: number[] = [];
  yearFilter: string = '';
  makeFilter: string = '';
  modelFilter: string = '';
  priceFilter: string = '';

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.cars = this.carService.getCars();
    console.log('cars', this.cars);
    this.years = [...new Set(this.cars.map((value) => value.year))].sort();
    console.log('years', this.years);
    this.makeList = [...new Set(this.cars.map((value) => value.make))].sort();
    console.log('makeList', this.makeList);
    this.modelList = [...new Set(this.cars.map((value) => value.model))].sort();
    console.log('modelList', this.modelList);
    this.prices = [...new Set(this.cars.map((value) => value.price))].sort();
    console.log('prices', this.prices);
  }

  filterCars() {
    this.cars = this.carService.getFilteredCars(
      this.yearFilter,
      this.makeFilter,
      this.modelFilter,
      this.priceFilter
    );
    console.log('filtered cars', this.cars);
  }

  clearFilters() {
    this.yearFilter = '';
    this.makeFilter = '';
    this.modelFilter = '';
    this.priceFilter = '';
    this.cars = this.carService.getCars();
  }
}
