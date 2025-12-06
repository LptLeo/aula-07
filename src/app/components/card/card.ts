import { Component, Input } from '@angular/core';
import { Button } from "../button/button";

@Component({
  selector: 'app-card',
  imports: [Button],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() produto: any;
}
