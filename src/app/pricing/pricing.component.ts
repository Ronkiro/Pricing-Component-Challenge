import { Component, OnInit } from '@angular/core';

import { Soldable } from './price/soldable';
import { SoldableService } from './soldable.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css', './shared.css']
})
export class PricingComponent implements OnInit {
  public itemList: Soldable[];

  constructor(service: SoldableService) {
    this.itemList = service.getSoldableList();
  }

  ngOnInit() {
  }

}
