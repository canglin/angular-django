import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cbar',
  templateUrl: './cbar.component.html',
  styles: []
})
export class CbarComponent implements OnInit {
private barValue: number;
  constructor() {
    this.barValue = 0;
  }
  @Input()
  get value() {
    return this.barValue;
  }
  get barWidth() {
    return Math.ceil(this.barValue * 100 / 255) + '%';
  }
  ngOnInit() {
  }

}
