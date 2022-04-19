import { Component } from '@angular/core';

export interface Card {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggle = false;

  cards: Card[] = [
    {title: 'Card 1', text: 'number 1'},
    {title: 'Card 2', text: 'number 2'},
    {title: 'Card 3', text: 'number 3'}
  ];

  toggleCards() {
    this.toggle = !this.toggle;
  }
}
