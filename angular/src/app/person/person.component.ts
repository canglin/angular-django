import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() firstname: string = "Sherlock";
  @Input() lastname: string = "Holmes";
  @Input() height: number = 160;
  @Input() birthday = new Date(1973, 5,5);
  constructor() { }

  ngOnInit() {
  }

  get height_feet(){
    return this.height * 0.0320;
  }

  height_up(){
    this.height += 1;
  }

  height_down(){
    this.height -= 1;
  }
}
