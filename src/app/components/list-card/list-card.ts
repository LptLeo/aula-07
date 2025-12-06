import { Component } from '@angular/core';
import { Card } from '../card/card';
import { Titulo } from '../titulo/titulo';
import { Button } from '../button/button';

@Component({
  selector: 'app-list-card',
  imports: [Card, Titulo, Button],
  templateUrl: './list-card.html',
  styleUrl: './list-card.css',
})
export class ListCard {
  public number_to_increment = 0

  increment_number() {
    this.number_to_increment += 1
  }

  produtos = [
    { name: "transformers", description: "um bom filme" },
    { name: "transformers", description: "um bom filme" },
    { name: "transformers", description: "um bom filme" },
    { name: "transformers", description: "um bom filme" },
    { name: "transformers", description: "um bom filme" },
    { name: "transformers", description: "um bom filme" },
    { name: "transformers", description: "um bom filme" },
    { name: "transformers", description: "um bom filme" },
    { name: "transformers", description: "um bom filme" },
    { name: "transformers", description: "um bom filme" },
  ]

  celulares = [
    { name: "Samsung A06", description: "Um celular barato", price: "799,90" },
    { name: "Samsung A16", description: "Um celular", price: "1.099,90" },
    { name: "Samsung A26", description: "Um celular custo benefício ótimo", price: "1.399,90" },
    { name: "Samsung A56", description: "Um celular intermediário completo", price: "1.999,90" },
    { name: "Samsung S24 FE", description: "Um celular topo de linha completo", price: "2.399,90" },
  ]
}
