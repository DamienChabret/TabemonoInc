import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '@models/Recipe';

@Component({
  selector: 'app-Recipe',
  templateUrl: './Recipe.component.html',
  styleUrls: ['./Recipe.component.css'],
  standalone: true
})
export class RecipeComponent implements OnInit {
  @Input() recipe! : Recipe;

  constructor() { }

  ngOnInit() {
  }

}
