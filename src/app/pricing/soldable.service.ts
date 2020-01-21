import { Injectable } from '@angular/core';
import { Soldable } from './price/soldable';

@Injectable({
  providedIn: 'root'
})
export class SoldableService {

  private soldableList: Soldable[];
  constructor() {
    this.soldableList = [
      new Soldable({
        type: 'Basic',
        price: 19.99,
        storage: '500 GB',
        maxUsers: 2,
        maxGB: '5 GB'
      }),
      new Soldable({
        type: 'Professional',
        price: 24.99,
        storage: '1 TB',
        maxUsers: 5,
        maxGB: '10 GB'
      }),
      new Soldable({
        type: 'Master',
        price: 39.99,
        storage: '2 TB',
        maxUsers: 10,
        maxGB: '20 GB'
      })
    ];
  }

  getSoldableList = () => {
    return this.soldableList;
  }
}
