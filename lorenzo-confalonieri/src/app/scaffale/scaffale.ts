import { Component } from '@angular/core';
import { Cassetta } from '../cassetta/cassetta';
@Component({
  selector: 'app-scaffale',
  imports: [Cassetta],
  templateUrl: './scaffale.html',
  styleUrl: './scaffale.css',
})
export class Scaffale {
  nomiCassette: string[] = [
    'frutta mista',
    'ortaggi di stagione',
    'frutta molto buona',
    'verdure bio',
    'miste per mista'
  ];
}

