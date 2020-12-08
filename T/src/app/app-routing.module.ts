import { NgModule } from '@angular/core';
import { CarComponent } from './car/car.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "cars", component: CarsListComponent},
  {path: "car/:id", component: CarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
