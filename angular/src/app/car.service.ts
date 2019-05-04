import {Injectable} from '@angular/core';
import {Order} from './order';
import {Model} from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  model: Model;
  order: Order;
  constructor() {
    this.model = {
      base_price: 3000,
      engines: [
        {id: 1, name: 'One', price: 0, image: '/assets/engine-1.png'},
        {id: 2, name: 'Two', price: 1000, image: '/assets/engine-2.png'},
        {id: 3, name: 'Three', price: 2000, image: '/assets/engine-3.png'},
      ],
      wheels: [
        {id: 1, name: "18'", price: 0, image: '/assets/wheels-18.png'},
        {id: 2, name: "19'", price: 500, image: '/assets/wheels-19.png'},
      ],
      exterior_color: 'white'
    };

    this.order = {
      engine: this.model.engines[0],
      wheels: this.model.wheels[0]
    };
  }
}
