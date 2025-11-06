import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-cassetta',
  imports: [],
  templateUrl: './cassetta.html',
  styleUrl: './cassetta.css',
})
export class Cassetta {
  @Input() nome!: string;
  lista1: string[] = ['banane', 'pere', 'patate'];
}