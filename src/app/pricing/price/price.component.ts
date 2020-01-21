import { Component, Input, OnInit } from '@angular/core';

import { Soldable } from './soldable';
import { ToggleService } from '../header/toggle/toggle.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css', '../shared.css']
})
export class PriceComponent implements OnInit {
  @Input() item: Soldable;
  @Input() index: number;
  isMonthly = true;
  isColored: boolean;
  constructor(private service: ToggleService) { }

  ngOnInit() {
    this.isColored = this.index % 2 === 1;
    this.service.isToggled.subscribe(isToggled => this.isMonthly = isToggled);
  }

}
