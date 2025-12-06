import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Card } from "./card/card";
import { ListCard } from "./list-card/list-card";
import { Titulo } from "./titulo/titulo";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, ListCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-aula07');
}
