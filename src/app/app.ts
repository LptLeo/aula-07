import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { ListCard } from "./components/list-card/list-card";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, ListCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-aula07');
}
