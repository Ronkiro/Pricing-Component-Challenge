import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ToggleService } from './toggle.service';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  constructor(private service: ToggleService) { }

  ngOnInit() { }

  onChange(change: boolean) {
    this.service.toggle(change);
  }

}
