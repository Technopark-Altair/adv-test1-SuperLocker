import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input() carInput: Car;
  car: Car;
  isRight: boolean = true;

  constructor(private route: ActivatedRoute,
    private carService: CarService){ }

  ngOnInit(): void {
    this.route.params.subscribe(
      (data) => {
        let id: number = +data.id;
        this.car = this.carService.getCar(id);
      }
    );
  }

}
