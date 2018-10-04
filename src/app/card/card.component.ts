import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {

  isRear = false;
  fullTime = new Date(Date.now());

  toggleFlipCard() {
    this.isRear = !this.isRear;
  }

}
