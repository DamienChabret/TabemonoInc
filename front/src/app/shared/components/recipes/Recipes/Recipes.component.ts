import { Component, OnInit } from '@angular/core';
import { Recipe } from '@models/Recipe';
import { RecipesService } from '@services/RecipesService';

@Component({
  selector: 'app-Recipes',
  templateUrl: './Recipes.component.html',
  styleUrls: ['./Recipes.component.css'],
  standalone: true
})
export class RecipesComponent implements OnInit {

  recipes! : Recipe[];
  recipeService!: RecipesService;

  constructor(recipeService : RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getAll();
  }

}
