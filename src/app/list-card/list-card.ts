import { Component } from '@angular/core';
import { Card } from "../card/card";
import { Titulo } from "../titulo/titulo";

@Component({
  selector: 'app-list-card',
  imports: [Card, Titulo],
  templateUrl: './list-card.html',
  styleUrl: './list-card.css',
})
export class ListCard {
  produtos = [
    { name: "transformers", description: "um bom filme"},
    { name: "transformers", description: "um bom filme"},
    { name: "transformers", description: "um bom filme"},
  ]
}
