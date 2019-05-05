import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line
  // templateUrl: './bar.component.html',
  selector: 'color-bar',
  template: `
    <div class="progress-bar mb-1">
      <div class="progress-bar" [style.width]="barWidth">{{value}}</div>
    </div>
  `,
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  private barValue: number;
  constructor() { }

  ngOnInit() {
  }

  @Input()
  get value() {
    return this.barValue;
  }
  get barWidth() {
    return Math.ceil(this.barValue * 100 / 255) + '%';
  }
}
