import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '@models/Ingredient';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css'],
  standalone: true
})
export class IngredientComponent implements OnInit {
  @Input() ingredient! : Ingredient;

  constructor() { }

  ngOnInit() {
  }

}
