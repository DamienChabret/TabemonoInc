import { Component, OnInit } from '@angular/core';
import { IngredientComponent } from '../ingredient/ingredient.component';
import { IngredientsService } from '@services/IngredientsService';
import { Ingredient } from '@models/Ingredient';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css'],
  imports: [ IngredientComponent],
  standalone: true
})
export class IngredientsComponent implements OnInit {
  ingredients!: Ingredient[];
  ingredientsService!: IngredientsService;

  constructor(ingredientsService: IngredientsService) { }

  ngOnInit() {
    this.ingredients = this.ingredientsService.getAllByUser();
  }

}
