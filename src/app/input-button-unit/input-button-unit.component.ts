import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <p>input-button-unit works! The title is: {{ title }}</p>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Buttons!!';
  constructor() {
    this.title = 'I love nachos';
  }

  ngOnInit() {
    this.title = 'ng cli rulez!!!1';
  }

  changeTitle(newTitle: string) {
    console.log('changeTitle: ' + newTitle);
    this.title = newTitle;
  }
}
