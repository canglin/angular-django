import {Component, OnInit} from '@angular/core';
import {CarService} from '../car.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  constructor(private car: CarService) {
  }

  get selectedWheelsLayer() {
    return this.car.model.wheels.find((wh) => {
      return wh === this.car.order.wheels;
    }).image;
  }

  ngOnInit() {
  }

}