import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  dataSource = new BehaviorSubject(true);
  isToggled = this.dataSource.asObservable();

  constructor() { }

  toggle(state: boolean) {
    this.dataSource.next(state);
  }
}
